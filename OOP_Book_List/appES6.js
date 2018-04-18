class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList (book) {
    const list = document.querySelector('#book-list');

    // Create Element
    const row = document.createElement('tr');

    // Insert Columns
    row.innerHTML = `
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    // append to list
    list.appendChild(row);
  }

  showAlert (message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add message text
    div.appendChild(document.createTextNode(message)); 
    // Get Parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form); // parent.insertBefore(what to insert, where to inster before)
    
    // Timeout after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);

  }

  deleteBook (target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields () {
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Local Storage Class
class Storage {
  static getBooks () {

  }
  
  static displayBooks() {

  }

  static addBook () {

  }

  static removeBook (){

  }
}


//--------------------------------------Event Delagation-----------------------------------------
// Event Listener for add Book 
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate the Book Object
  const book = new Book(title, author, isbn) 

  // Instantiate the UI Object
  const ui = new UI();


  // Validate 
  if (title === '' || author == '' || isbn === '') { 
    // Error alert
    ui.showAlert('Please fill in all fields', 'error') 
  } else {
    // Add Book to List
    ui.addBookToList(book); 

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