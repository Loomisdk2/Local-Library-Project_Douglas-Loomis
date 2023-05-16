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

}

/////////   8      /////////////
function getBorrowersForBook(book, accounts) {}
//hard
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
