import PropTypes from "prop-types";
const BookExist = (books, book) => {
  let flag = false;
  books.find((b) => {
    if (b.id === book.id) {
      flag = [true, b.shelf];
    }
  });
  return flag;
};
BookExist.PropTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
};
export default BookExist;
