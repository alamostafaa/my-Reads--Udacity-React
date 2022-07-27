import BookShelfChanger from "./BookShelfChanger";
const BookList = ({ books, onChangeState, from}) => {
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
                    backgroundImage: `url(${bo.imageLinks? bo.imageLinks.smallThumbnail: "" })`,
                  }}
                ></div>
                <BookShelfChanger book={bo} onChangeState={onChangeState}  from={from}/>
              </div>
              <div className="book-title">{bo.title}</div>
              <div className="book-authors">{bo.authors}</div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default BookList;
