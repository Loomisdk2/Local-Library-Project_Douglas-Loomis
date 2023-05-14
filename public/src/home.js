function getTotalBooksCount(books) {
  const totalBooks = books.reduce((total, book) => {
    result = total + book; 
    return result;
  }, 0);
  return totalBooks;
}

function getTotalAccountsCount(accounts) {}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
