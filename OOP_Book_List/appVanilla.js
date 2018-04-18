// Book Constructor -- handle creating book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - set of prototype methods to add book to list, delete book, show alert, anything to do with the UI
function UI () {}  // all logic will be in prototype

// UI Prototypes
// --------------------------------------------------------
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

// Show Alert
UI.prototype.showAlert = function (message, className){
  // Create div
  const div = document.createElement('div'); 
  // Add a classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  // Insert Alert
  container.insertBefore(div, form) // takes two parameters, 1st what we want to instert, second where we want to insert before
  
  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000) // timeout function takes two parameters, 1 is function, 2 is time before it executes in milliseconds
}

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear fields after submit function
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//------------------------------------------------------------------
// Event Listener for add Book
document.getElementById('book-form').addEventListener('submit', function (e) { // listing for delegation to listen for the submit event because we will append items to the DOM
  // Get form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate the Book Object
  const book = new Book(title, author, isbn) // pass in the form values as the params for the book object

  // Instantiate the UI Object
  const ui = new UI();


  // Validate 
  if (title === '' || author == '' || isbn === '') { // check if any field is empty
    // Error alert
    ui.showAlert('Please fill in all fields', 'error') // mehtod takes a msg and the class we append
  } else { // go ahead and add the book
    // Add Book to List
    ui.addBookToList(book); // will use the ui prototype to append the book to the list

    // Show Alert
    ui.showAlert("Book Added!", 'success')

    // Clear form fields after submit 
    ui.clearFields();
  } 
  e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success')

  e.preventDefault();
});

