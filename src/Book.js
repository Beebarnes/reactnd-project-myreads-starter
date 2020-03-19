import React from 'react'
import BookShelfChanger from './BookShelfChanger'

function Book(props) {
    let backgroundImage = ''
    if (props.book.imageLinks){
        backgroundImage = `url(${props.book.imageLinks.thumbnail})` || `url(${props.book.imageLinks.smallThumbnail})`
    } else {
        backgroundImage = `url(https://via.placeholder.com/150)`
    }
    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
                    <BookShelfChanger bookTitle={props.book.title} bookStateHandler={props.bookStateHandler}/>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors"> {props.book.authors ? props.book.authors.map( (author, index) => (
                    <p key={index}>{author}</p>
                )) : null }
                </div>
            </div>
        </div>
        
    )
};

export default Book;