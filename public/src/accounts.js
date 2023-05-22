let findAnyById = require("./helperFunctions")

///////////      1    passed/done   ////////////
function findAccountById(accounts, id) {
  return findAnyById(accounts, id);
}

//////////    2   passed/done    //////////////
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1));
}

/////////        3      passed/done //////////////
function getTotalNumberOfBorrows(account, books) {
const accountId = account.id
return books.reduce((accum, book) => {
  const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length 
  return accum + borrowCount;
}, 0);
}

///////////       4     ////////////////////
function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows.some(borrow => borrow.id === account.id && !borrow.returned)) {
      for (let j = 0; j < authors.length; j++) {
        if (authors[j].id === books[i].authorId) {
          books[i].author = authors[j];
          break;
        }
      }
      borrowedBooks.push(books[i]);
    }
  }
  return borrowedBooks;
}
//hard

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
