import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
const BookList = ({ books, onChangeState }) => {
  return (
    <ol className="books-grid">
      {books.map((bo) => {
        return (
          <li key={bo.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      bo.imageLinks ? bo.imageLinks.smallThumbnail : ""
                    })`,
                  }}
                ></div>
                <BookShelfChanger book={bo} onChangeState={onChangeState} />
              </div>
              <div className="book-title">{bo.title}</div>
              <div className="book-authors">{bo.authors? bo.authors.join(", "): ""}</div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeState: PropTypes.func.isRequired,
};
export default BookList;
