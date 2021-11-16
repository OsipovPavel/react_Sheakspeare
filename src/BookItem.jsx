import React from "react";


const BookItem = (props) =>{
    return (
      <div className='book'>
        <span>{props.key}</span>
        <span>{props.book}</span>
        <span>{props.originalTitle}</span>
        <span>{props.year}</span>
      </div>
    )
  }

  export default BookItem;