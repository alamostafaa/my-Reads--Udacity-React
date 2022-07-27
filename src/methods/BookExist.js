const BookExist = (books, book) => {
    let flag = false;
    books.find((b) => {
      if (b.id === book.id) {
        flag = [true,b.shelf];
      }
    });
    return flag;
  };

  export default BookExist;