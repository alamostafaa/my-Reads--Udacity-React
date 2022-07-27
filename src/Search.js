import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import BookList from "./componentes/BookList";
import modifyBooksState from "./methods/ModifyBookState";

const Search = ({ onChangeState, shelfBooks }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const upSearch = async (q) => {
    setQuery(q);
    try {
      if (q !== "") {
        let resBooks = await search(q, 10);
        if(resBooks.error){
          setSearchBooks([]);
        }else
        {
          resBooks = modifyBooksState(resBooks, shelfBooks);
          setSearchBooks(resBooks);
        }
      } else {
        setSearchBooks([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => upSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {searchBooks.length > 0 &&(<BookList books={searchBooks} onChangeState={onChangeState} />)}
        {searchBooks.length === 0 && (<h3>No Data Found</h3>)}
      </div>
    </div>
  );
};

export default Search;
