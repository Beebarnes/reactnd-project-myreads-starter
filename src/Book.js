import React from 'react'
import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'

function Book(props) {
    let backgroundImage = `url(${props.book.imageLinks.thumbnail})`
    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
                    <BookShelfChanger bookTitle={props.book.title} bookStateHandler={props.bookStateHandler}/>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.author}</div>
            </div>
        </div>
        
    )
};

export default Book;