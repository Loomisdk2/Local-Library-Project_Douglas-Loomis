let findAnyById = require("./helperFunctions")

//////////      5        /////////////
function findAuthorById(authors, id) {
  return author = authors.find((found) => found.id === id);
}

//////         6           ///////////////
function findBookById(books, id) {
  return book = books.find((found) => found.id === id);
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
