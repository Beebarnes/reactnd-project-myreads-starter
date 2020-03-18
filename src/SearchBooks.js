import React from 'react'
import { Link } from 'react-router-dom'
import { checkPropTypes } from 'prop-types';
import Book from './Book';

function SearchBooks(props) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" onChange={(e) => props.searchStateHandler(e)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {props.books.map((book, index) => ( book.title.includes(props.searchInput) ? 
                        <li key={index}>
                            <Book book={book} bookStateHandler={props.bookStateHandler}/>
                        </li> : null
                    ))}   
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;

