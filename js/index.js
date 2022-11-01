/* eslint-disable no-use-before-define */

// js to access html elements
const bookList = document.querySelector('.book__list');
const addNewBookForm = document.querySelector('.new__book');

// Create an book collection for storing books
let booksCollector = [
  {
    title: 'Testing',
    author: 'new book',
  },
];

// Create a function to add Collection to local storage
const AddLocalStorage = (data) => {
  localStorage.setItem('booksCollection', JSON.stringify(data));
};

// Add display function
const displayBook = (arr) => {
  bookList.innerHTML = '';

  // Check if book collection is empty
  if (arr.length === 0) {
    // create a empty message element with a class 'book__empty'
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'book__empty';
    emptyMsg.innerText = 'Empty Book Collection';

    // Append the book card to the parent node
    bookList.appendChild(emptyMsg);
  } else {
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
  }
};

// Create a remove function
const deleteBook = (index) => {
  booksCollector = JSON.parse(localStorage.getItem('booksCollection'));

  // Delete book at the given index
  booksCollector.splice(index, 1);

  // display the new array
  displayBook(booksCollector);

  // Update the local storage
  AddLocalStorage(booksCollector);
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
  AddLocalStorage(booksCollector);
};

// add event listener to form
addNewBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(addNewBookForm);
  addNewBookForm.reset();
});

// Add event listener to window reload
window.addEventListener('load', () => {
  // Check if the site has been visited previous with saved data
  if (localStorage.getItem('booksCollection')) {
    booksCollector = JSON.parse(localStorage.getItem('booksCollection'));
  } else {
    booksCollector = [];
  }
  displayBook(booksCollector);
});