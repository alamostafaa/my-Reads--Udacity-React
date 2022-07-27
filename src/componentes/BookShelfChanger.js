import PropTypes from "prop-types";
const BookShelfChanger = ({ book, onChangeState }) => {
  const changeHandler = (v) => {
    onChangeState(book, v);
  };
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(e) => changeHandler(e.target.value)}
      >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeState: PropTypes.func.isRequired,
};
export default BookShelfChanger;
