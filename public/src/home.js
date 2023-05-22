let findAnyById = require("./helperFunctions")

/////     9   passed/done    ////////
function getTotalBooksCount(books) {
  return books.length;
}

//////     10   passed/done   ///////
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

///////     11    passed/done   /////////
function getBooksBorrowedCount(books) {
  let checkedOutTotal = 0;
books.forEach((book) => {
  if (!book.borrows[0].returned) {
    checkedOutTotal++;
  }
});
return checkedOutTotal;
    }
  

///////    12    passed     /////////
function getMostCommonGenres(books) {
  let count = {};
  books.forEach((book) => {
    const genre = book.genre;
    count[genre] = count[genre] ? count[genre] + 1 : 1;
  });
const genreCounts = Object.entries(count);
genreCounts.sort((a, b) => b[1] - a[1]);
const topGenres = genreCounts.slice(0, 5);
  const result = topGenres.map(([genre, count]) => ({ name: genre, count}));
  return result;
}

//////     13   passed  ///////////
function getMostPopularBooks(books) {
  const bookCounts = books.reduce((counts, book) => {
    const borrowCount = book.borrows.length;
    counts.push({ name: book.title, count: borrowCount });
    return counts;
  }, []);
  const popularBooks = bookCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  return popularBooks;
}

/////     14      /////////
function getMostPopularAuthors(books, authors) {
  const authorCounts = {};
  books.forEach((book) => {
    const { authorId, borrows } = book;
    if (!authorCounts[authorId]) {
      authorCounts[authorId] = 0;
    }
    authorCounts[authorId] += borrows.length;
  });
  const popularAuthors = Object.entries(authorCounts)
    .map(([authorId, count]) => {
      const { first, last } = authors.find((author) => author.id === parseInt(authorId, 10)).name;
      return { name: `${first} ${last}`, count };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
