let findAnyById = require("./helperFunctions")

//////////      5     pass/done   /////////////
function findAuthorById(authors, id) {
  // return author = authors.find((found) => found.id === id);
  return findAnyById(authors, id);
}

//////         6      pass/done     ///////////////
function findBookById(books, id) {
  //return book = books.find((found) => found.id === id);
  return findAnyById(books, id);
}
////////      7    fail/expected 6 but got 9   //////////
function partitionBooksByBorrowedStatus(books) {
// let isReturned = [];
// let notReturned = [];

//   for (let book in books) {
//     for(let borrow of books[book].borrows) {
//       if(borrow.returned) {
//         isReturned.push(books[book]);
//    } else {
//      notReturned.push(books[book]);
//       }
//     }
// }
const isReturned = books.map(book => book.borrows.returned);
const notReturned = books.filter(book => !book.borrows.returned);
return [isReturned, notReturned];
}


/////////      8      /////////////
// Use slice?
function getBorrowersForBook(book, accounts) {

}
//hard
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
