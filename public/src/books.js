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
////////      7    pass/done  //////////
function partitionBooksByBorrowedStatus(books) {
  const borrowed = [];
  const returned = [];

  for (const book of books) {
    const isReturned = book.borrows[0].returned;

    if (isReturned) {
      returned.push(book);
    } else {
      borrowed.push(book);
    }
  }

  return [borrowed, returned];
}

/////////      8         /////////////
function getBorrowersForBook(book, accounts) {
  const borrowersList = [];
  for (let i = 0; i < book.borrows.length; i++) {
    const borrow = book.borrows[i];
    const account = accounts.find(acc => acc.id === borrow.id);
    if (account) {
      account.returned = borrow.returned;
      borrowersList.push(account);
    }
    }
    borrowersTen = borrowersList.slice(0, 10);
    return borrowersTen;
  }
  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
