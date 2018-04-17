// Book Constructor -- handle creating book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - set of prototype methods to add book to list, delete book, show alert, anything to do with the UI
function UI () {}  // all logic will be in prototype

// UI Prototype
// Add book to list
UI.prototype.addBookToList = function (book) {
  // Get the list
  const list = document.getElementById('book-list');

  // Create tr Element
  const row = document.createElement('tr');

  // Instert Columns -- we can pass in the object info since we are passing the object itself into the function, last row and then we append it to the list itself as a child
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td> 
  `;

  // Append to the list
  list.appendChild(row);
  
  
}


// Event Listener
document.getElementById('book-form').addEventListener('submit', function (e) { // listing for delegation to listen for the submit event because we will append items to the DOM
  // Get form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate the Book Object
  const book = new Book(title, author, isbn) // pass in the form values as the params for the book object

  // Instantiate the UI Object
  const ui = new UI();
  
  // Add Book to List
  ui.addBookToList(book); // will use the ui prototype to append the book to the list

  
  e.preventDefault();
});