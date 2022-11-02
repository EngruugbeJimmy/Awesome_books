/* eslint-disable max-classes-per-file */
// eslint-disable-next-line max-classes-per-file

// js to access html elements
const bookListTest = document.querySelector('.books.list');
const addNewBookFormTEST = document.querySelector('.add__book-form.testing');

// create a bookListing class
class BookListing {
  constructor() {
    this.list = [];
  }

  getList() {
    if (localStorage.getItem('bookList')) {
      this.list = [...JSON.parse(localStorage.getItem('bookList'))];
    }
    return this.list;
  }

  addToList(newBook) {
    this.list.push(newBook);
    localStorage.setItem('bookList', this.getList());
  }
}

class Book {
  constructor() {
    this.title = document.querySelector('#title2');
    this.author = document.querySelector('#author2');
  }
}

// create an instance of the the book listing class
const bookListContainer = new BookListing();

// const list = document.querySelector('.books.list');

// class Book {
//   constructor() {
//     // create a book card with a class 'book'
//     this.bookdiv = document.createElement('div');
//     this.bookdiv.className = 'book';

//     // create a book details p with the class 'book__details'
//     this.bookDetails = document.createElement('p');
//     this.bookDetails.className = 'book__details';
//     this.title = document.querySelector('#title').value;
//     this.author = document.querySelector('#author').value;
//     this.bookDetails.innerText = `"${this.title}" by ${this.author}`;

//     // Create the delete button with a class 'book__remove-btn'
//     this.deleteBtn = document.createElement('button');
//     this.deleteBtn.className = 'book__remove-btn';
//     this.deleteBtn.innerText = 'Remove';
//     // Attach a listener to the remove botton for delete function
//     this.deleteBtn.addEventListener('click', (event) => {
//       list.removeChild(event.target.parentNode);
//     });
//   }

//   addBook () {
//     this.bookdiv.appendChild(this.bookDetails);
//     this.bookdiv.appendChild(this.deleteBtn);
//     list.appendChild(this.bookdiv);
//   }
// }
