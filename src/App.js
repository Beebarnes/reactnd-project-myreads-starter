import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {
        shelf: 'currentlyReading',
        id: 1,
        name: 'Currently Reading'
      },
      {
        shelf: 'wantToRead',
        id: 2,
        name: 'Want To Read'
      },
      { 
        shelf: 'read',
        id: 3,
        name: 'Read'
      }
    ],
    searchInput: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({books}))
      })
  }

  bookStateHandler = (event, bookTitle) => {
    let newBookState = event.target.value;
    let newBooks = [...this.state.books];
    let book = newBooks.filter(book => book.title === bookTitle);
    book[0].shelf = newBookState;
    this.setState({books : newBooks})
  };

  searchStateHandler = (event) => {
    let newSearchInput = this.state.searchInput;
    this.setState({searchInput: event.target.value})
  }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} searchInput={this.state.searchInput} searchStateHandler={this.searchStateHandler} bookStateHandler={this.bookStateHandler} />
        )}
        />
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} shelves={this.state.shelves} bookStateHandler={this.bookStateHandler}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
