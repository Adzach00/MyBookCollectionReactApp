import React from 'react';
import Book from '../components/Book'

export default function Content(props) {
    const books = props.books.map(book => {
        return (
            <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                img={book.img}
                delElement={props.delElement}
                addRating={props.addRating}
            />
        )
    })   
    return (
        <div className="main">
            {books}
        </div>
  );
}