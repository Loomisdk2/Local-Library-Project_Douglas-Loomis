let findAnyById = require("./helperFunctions")

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}
// hard
function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}
// hard (look up the .slice() use if only returning a certain number of variables.)
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
