let findAnyById = require("./helperFunctions")

function findAccountById(accounts, id) {
  // use helper function
  // for (let i in accounts) {
  //   if (accounts[i].id === id)
  //     return accounts[i]; 
  // }
  return findAnyById(accounts, id);
}

function sortAccountsByLastName(accounts) {
  //for (let i = 0, i < accounts.length; i++){} <---- Don't need this. .sort() does that automatcally.
  //const lastName = accounts.name.last; <--- This causes a problem.
  return accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1));
 //return accounts; <---- I can return directly.
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
// find, reduce
const accountId = account.id
for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++)
   if (accountId === books[i].borrows[j].id) {
    total += 1;
   }
}
return total;
}

function getBooksPossessedByAccount(account, books, authors) {}
//hard

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
