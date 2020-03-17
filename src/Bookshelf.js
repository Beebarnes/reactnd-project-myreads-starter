import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function Bookshelf(props) {
    let currentShelf = props.shelf.shelf;
    let currentBookArray = props.books.filter(book => book.shelf === currentShelf);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {currentBookArray.map((book, index) => (
                        <li key={index}>
                            <Book book={book} bookStateHandler={props.bookStateHandler} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        
    )
};

export default Bookshelf;