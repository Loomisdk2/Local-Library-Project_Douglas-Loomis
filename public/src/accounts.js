function findAccountById(accounts, id) {
  for (let i in accounts) {
    if (accounts[i].id === id)
      return accounts[i];
  }
}

function sortAccountsByLastName(accounts) {
  
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
