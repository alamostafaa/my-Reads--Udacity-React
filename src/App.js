import "./App.css";
import { useEffect, useState } from "react";
import * as BooksApi from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import Shelves from "./componentes/Shelves";
import Search from "./Search";
import BookExist from "./methods/BookExist";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const books = await BooksApi.getAll();
      setBooks(books);
    };
    getBooks();
  }, []);
  const onChangeState = async (book, bookShelfName) => {
    const res = await BooksApi.update(book, bookShelfName);
    let newbooks;
    if (BookExist(books,book)[0]) {  
      newbooks = books.filter(bo => bo.shelf !== "none").map((b) => {
        if (b.id === book.id) {
          return { ...b, shelf: bookShelfName };
        }
        else{
          return b;
        }     
      });
    }
    else
    {
      newbooks = [...books, {...book, shelf:bookShelfName}]
    }
    setBooks(newbooks);
  }; 
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Shelves booksObj={books} onChangeState={onChangeState} />}
        />
        <Route
          path="/search"
          element={<Search shelfBooks={books} onChangeState={onChangeState}  />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
