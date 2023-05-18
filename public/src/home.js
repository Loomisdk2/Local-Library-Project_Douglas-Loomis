let findAnyById = require("./helperFunctions")

/////     9   passed/done    ////////
function getTotalBooksCount(books) {
  return books.length;
}

//////     10   passed/done   ///////
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

///////     11    fail    /////////
// forEach
function getBooksBorrowedCount(books) {
  let checkedOutTotal = 0;
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].borrows.returned === false) {
  //     checkedOutTotal += 1;
books.forEach((book) => {
  if (!book.borrows[0].returned) {
    checkedOutTotal++;
  }
})
return checkedOutTotal;
    }
  

///////    12      /////////
function getMostCommonGenres(books) {}
// hard

//////     13     ///////////
function getMostPopularBooks(books) {

}

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
