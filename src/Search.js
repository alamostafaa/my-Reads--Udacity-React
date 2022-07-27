import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import BookList from "./componentes/BookList";
import modifyBooksState from "./methods/ModifyBookState";
import PropTypes from "prop-types";

let flag = false;
const Search = ({ onChangeState, shelfBooks }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const upSearch = async (q) => {
    setQuery(q);
    try {
      if (q !== "") {
        let resBooks = await search(q, 20);
        if (resBooks.error) {
          flag = true;
          setSearchBooks([]);
        } else {
          resBooks = modifyBooksState(resBooks, shelfBooks);
          setSearchBooks(resBooks);
        }
      } else {
        setSearchBooks([]);
        flag = false
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
        {searchBooks.length > 0 && (
          <BookList
            books={searchBooks}
            onChangeState={onChangeState}
            from="search"
          />
        )}
        {flag && (
          <h3 style={{textAlign:"center"}}>
            No Data found
          </h3>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  onChangeState: PropTypes.func.isRequired,
  shelfBooks: PropTypes.array.isRequired,
};
export default Search;
