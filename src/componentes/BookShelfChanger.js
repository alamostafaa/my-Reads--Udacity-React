import { useState } from "react";
const BookShelfChanger = ({book,onChangeState}) => {
  const changeHandler =(v)=>{
    onChangeState(book,v)
  }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf} onChange={(e)=> changeHandler(e.target.value)}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
