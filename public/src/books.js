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
////////      7    fail/expected 6 but got 9   //////////
function partitionBooksByBorrowedStatus(books) {
// let isReturned = [];
// let notReturned = [];

//   for (let book in books) {
//     for(let borrow of books[book].borrows) {
//       if(borrow.returned) {
//         isReturned.push(books[book]);
//    } else {
//      notReturned.push(books[book]);
//       }
//     }
// }
const isReturned = books.map(book => book.borrows.returned);
const notReturned = books.filter(book => !book.borrows.returned);
return [isReturned, notReturned];
}


/////////      8      /////////////
// Use includes, slice
function getBorrowersForBook(book, accounts) {
  const borrowersList = [];
  for (const borrower of book) {
    if (borrower.borrows.id === accounts.id) {
      borrowersList.push(borrower);
    }
  }
  const tenRecentBorrowers = borrowersList.slice(0, 10);
  //  ai help
  // let borrowers = [];
  // borrowers = book.filter((index) => index.borrows.id === accounts.id);
  // borrowersTen = borrowers.slice(0, 10);

//  My Attempt
  // let borrowers = [];
// let bookBorrow = book.borrows;
// for (let i=0; i<bookBorrow.length; i++) {
//   if (bookBorrow[i].id === accounts) {
//     borrowers.push
//   }
// }

//    Pseudo
  // We're given a book. 
  // We have to look in the "borrows" key.
  // match the first 10 accounts whose id's are included in the book's "borrows" key.
  return tenRecentBorrowers;
}
//hard
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
