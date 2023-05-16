let findAnyById = require("./helperFunctions")

/////     9     ////////
function getTotalBooksCount(books) {
  return books.length;
}

//////     10    ///////
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

///////     11     /////////
function getBooksBorrowedCount(books) {}

///////    12      /////////
function getMostCommonGenres(books) {}
// hard

//////     13     ///////////
function getMostPopularBooks(books) {}

/////     14      /////////
function getMostPopularAuthors(books, authors) {}
// hard (look up the .slice() (use slice if only returning a certain number of variables).)
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
