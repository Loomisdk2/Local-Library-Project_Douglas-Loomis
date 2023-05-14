function findAccountById(accounts, id) {
  for (let i in accounts) {
    if (accounts[i].id === id)
      return accounts[i];
  }
}

function sortAccountsByLastName(accounts) {
  //for (let i = 0, i < accounts.length; i++){} <---- Don't need this. .sort() does that automatcally.
  //const lastName = accounts.name.last; <--- This causes a problem.
  return accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1));
 //return accounts; <---- I can return directly.
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let filtered = 

}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
