function findAuthorById(authors, id) {
  return author = authors.find((found) => found.id === id);
}

function findBookById(books, id) {
  return book = books.find((found) => found.id === id);
}

function partitionBooksByBorrowedStatus(books) {

}

function getBorrowersForBook(book, accounts) {}
//hard
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
