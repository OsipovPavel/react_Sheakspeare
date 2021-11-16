import React from "react";
import BookItem from "./BookItem";

const BookList = ({books, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {books.map(book => 
            <BookItem book={book.title} 
            originalTitle={book.originalTitle}
            year={book.year} 
            key={book.id}/>
            )}
        </div>
    )
}

export default BookList;