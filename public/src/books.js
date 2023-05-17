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
////////      7       //////////
function partitionBooksByBorrowedStatus(books) {
let isReturned = [];
let notReturned = [];
const booksStatus = [isReturned, notReturned];
  for (let book in books) {
if (books[book].borrows[0].returned === true) {
  isReturned.push(books[book]);
  }
  else {
    notReturned.push(books[book]);
  }
}
return booksStatus;
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
