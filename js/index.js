// js to access html elements
const books = document.querySelector('.books__container');
const addForm = document.querySelectorAll('.add__book');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksCollector = [
  {
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    title: 'Second book',
    author: 'Testeroo Testyy',
  },

];

// Create a remove function

// Create array from the books variable
const currentBooks = Array.from(books.querySelectorAll('.book'));

// Add event listeners to the button of the book cards
currentBooks.forEach((book, index) => {
  book.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
      books.removeChild(books.children[index]);
    }
  });
});
