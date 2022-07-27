import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

const Shelves = ({ booksObj, onChangeState }) => {
  let shelves = new Map();
  shelves.set(
    "currentlyReading",
    booksObj.filter((b) => b.shelf === "currentlyReading")
  );
  shelves.set(
    "wantToRead",
    booksObj.filter((b) => b.shelf === "wantToRead")
  );
  shelves.set(
    "read",
    booksObj.filter((b) => b.shelf === "read")
  );
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelfName="currently Reading"
            books={shelves.get("currentlyReading")}
            onChangeState={onChangeState}
          />
          <Shelf
            shelfName="want To Read"
            books={shelves.get("wantToRead")}
            onChangeState={onChangeState}
          />
          <Shelf
            shelfName="Read"
            books={shelves.get("read")}
            onChangeState={onChangeState}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
Shelves.prototypes = {
  booksObj: PropTypes.array.isRequired,
  onChangeState: PropTypes.func.isRequired,
};
export default Shelves;
