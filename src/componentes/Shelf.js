import BookList from "./BookList";
const Shelf = ({shelfName, books, onChangeState, from}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
       <BookList books={books} onChangeState={onChangeState} from={from}/>
      </div>
    </div>
  );
};

export default Shelf;
