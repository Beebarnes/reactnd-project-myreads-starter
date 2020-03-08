import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function Bookshelf(props) {
    console.log(props.shelf)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    
                    <Book/>
                    <Book/>
                </ol>
            </div>
        </div>
        
    )
};

export default Bookshelf;