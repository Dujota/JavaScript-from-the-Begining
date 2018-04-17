// Book Constructor -- handle creating book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - set of prototype methods to add book to list, delete book, show alert, anything to do with the UI

function UI () {}  // all logic will be in prototype