import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import { checkPropTypes } from 'prop-types';

function ListBooks(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {props.shelves.map((shelf) => (
                    <div key={shelf.shelf}>
                        <Bookshelf books={props.books} shelf={shelf} bookStateHandler={props.bookStateHandler}/>
                    </div>
                ))}
            </div>
            
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        
    )
};

export default ListBooks;