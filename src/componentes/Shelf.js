import BookList from "./BookList";
const Shelf = ({shelfName, books, onChangeState}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
       <BookList books={books} onChangeState={onChangeState}/>
      </div>
    </div>
  );
};

export default Shelf;
