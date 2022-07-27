import BookList from "./BookList";
import PropTypes, { string } from "prop-types";
const Shelf = ({ shelfName, books, onChangeState }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onChangeState={onChangeState} />
      </div>
    </div>
  );
};
Shelf.prototype = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeState: PropTypes.func.isRequired,
};
export default Shelf;
