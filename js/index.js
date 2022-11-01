/* eslint-disable no-use-before-define */
// js to access html elements
const bookList = document.querySelector('.book__list');
const addNewBookForm = document.querySelector('.new__book');

// Create an book collection for storing books
const booksCollector = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
  },
  {
    title: 'Woman, Thou Art Loosed',
    author: 'T. D. Jakes',
  },
];

// Add display function
const displayBook = (arr) => {
  bookList.innerHTML = '';

  // Loop through the array given
  arr.forEach((book, id) => {
    // create a book card with a class 'book'
    const bookdiv = document.createElement('div');
    bookdiv.className = 'book';

    // create the book title element with class 'book__title'
    const bookTitle = document.createElement('p');
    bookTitle.className = 'book__title';
    bookTitle.innerText = book.title;

    // create the book author element with class 'book__author'
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book__author';
    bookAuthor.innerText = book.author;

    // Create the delete button with a class 'book__remove-btn'
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'book__remove-btn';
    deleteBtn.innerText = 'Remove';

    // Attach a listener to the remove botton for delete function
    deleteBtn.addEventListener('click', () => {
      deleteBook(id);
    });

    // Create an horizonal line element
    const hrLine = document.createElement('hr');

    // Append all created elements to the book card
    bookdiv.appendChild(bookTitle);
    bookdiv.appendChild(bookAuthor);
    bookdiv.appendChild(deleteBtn);
    bookdiv.appendChild(hrLine);

    // Append the book card to the parent node
    bookList.appendChild(bookdiv);
  });
};

// Create a remove function
const deleteBook = (index) => {
  booksCollector.splice(index, 1);
  displayBook(booksCollector);
};

// Create a add book function
const addBook = (formElement) => {
  // Create book propery variables
  const bookTitle = formElement.querySelector('#title');
  const BookAuthor = formElement.querySelector('#author');

  // Create a book object
  const newBook = {
    title: bookTitle.value,
    author: BookAuthor.value,
  };
  // add book object to book collection
  booksCollector.push(newBook);
  displayBook(booksCollector);
};

// add event listener to form
addNewBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(addNewBookForm);
  addNewBookForm.reset();
});

// Add event listener to window reload
window.addEventListener('load', () => {
  displayBook(booksCollector);
});