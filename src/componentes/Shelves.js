import { Link } from "react-router-dom";
import { useState } from "react";
import Shelf from "./Shelf";


const Shelves = ({booksObj, onChangeState}) => {
  let shelves = new Map();
  shelves.set('currentlyReading', booksObj.filter(b => b.shelf === "currentlyReading"))
  shelves.set('wantToRead', booksObj.filter(b => b.shelf === "wantToRead"))
  shelves.set('read', booksObj.filter(b => b.shelf === "read"))
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelfName="currently Reading"  books={shelves.get('currentlyReading')} onChangeState={onChangeState} from="shelves"/>
          <Shelf shelfName="want To Read" books={shelves.get('wantToRead')} onChangeState={onChangeState} from="shelves"/>
          <Shelf shelfName="Read"  books={shelves.get('read')} onChangeState={onChangeState} from="shelves"/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
export default Shelves;
