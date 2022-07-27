import BookExist from "./BookExist";
import PropTypes from "prop-types";
const modifyBooksState = (resBooks, shelfBooks) => {
  let perfectBooks = [];
  resBooks.map((shBook) => {
    const T = BookExist(shelfBooks, shBook);
    if (T[0]) {
      perfectBooks = [...perfectBooks, { ...shBook, shelf: T[1] }];
    } else {
      perfectBooks = [...perfectBooks, { ...shBook, shelf: "none" }];
    }
  });
  return perfectBooks;
};

modifyBooksState.prototype = {
  resBooks: PropTypes.array.isRequired,
  shelfBooks: PropTypes.array.isRequired,
};
export default modifyBooksState;
