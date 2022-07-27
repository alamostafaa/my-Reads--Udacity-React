import BookExist from "./BookExist";
const modifyBooksState =(resBooks, shelfBooks)=>{
    let perfectBooks =[];
    resBooks.map(shBook=>{
      const T = BookExist(shelfBooks,shBook);
      if(T[0]){
        perfectBooks = [...perfectBooks,{...shBook, shelf:T[1]} ]
      }
      else
      {
        perfectBooks = [...perfectBooks, {...shBook, shelf:"none"}]
      }
    })
    return perfectBooks;
  }

export default modifyBooksState;