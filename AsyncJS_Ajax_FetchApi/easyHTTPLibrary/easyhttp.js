function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Prototype Methods for this class we are constructing

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) { // we need a callback to return our response otherwise we will get undefined if we try to log it on a return statement, this is because oif syncronous responses 
  // Open
  this.http.open('GET', url, true);

  // On Load
  let self = this; // a fix for the problem listed below which will capture the scope of 'this' and we can use that scope inside the function. 
  this.http.onload = function () {
    if (self.http.status === 200) { // this.http.status is undefined here inside the funciton cuz 'this' scopes to the function itself not the parent, ES6 arrow function fixes this issue
      callback(null, self.http.responseText); // insted of just sending back response, we want to send back an error if there is one, like nodeJS
    } else {
      callback('Error: ' + self.http.status); // if there is an error, it will display that code through the error
    }
  }

  // Send
  this.http.send();
}

// Make an HTTP PUT Request

// Make an HTTP POST Request

// Make an HTTP DELETE Request

