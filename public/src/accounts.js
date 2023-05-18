let findAnyById = require("./helperFunctions")

///////////      1    passed/done   ////////////
function findAccountById(accounts, id) {
  // use helper function
  // for (let i in accounts) {
  //   if (accounts[i].id === id)
  //     return accounts[i]; 
  // }
  return findAnyById(accounts, id);
}

//////////    2   passed/done    //////////////
function sortAccountsByLastName(accounts) {
  //for (let i = 0, i < accounts.length; i++){} <---- Don't need this. .sort() does that automatcally.
  //const lastName = accounts.name.last; <--- This causes a problem.
  return accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1));
 //return accounts; <---- I can return directly.
}

/////////        3      passed/needs revision  //////////////
// find, reduce, =>
function getTotalNumberOfBorrows(account, books) {
  //let total = 0;
const accountId = account.id
// for (let i = 0; i < books.length; i++) {
//   for (let j = 0; j < books[i].borrows.length; j++)
//    if (accountId === books[i].borrows[j].id) {
//     total += 1;
//    }
// } 
return books.reduce((accum, book) => {
  const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length 
  return accum + borrowCount;
}, 0);
}

///////////       4       ////////////////////
function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = [];
  for (i = 0; i < books.length; i++) {
    if (books[i].borrows[0].id === account.id) {
      borrowedBooks.push(books[i]);
      if borrowedBooks
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
