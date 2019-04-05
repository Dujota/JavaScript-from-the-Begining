function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Prototype Methods for this class we are constructing

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  // we need a callback to return our response otherwise we will get undefined if we try to log it on a return statement, this is because oif syncronous responses
  // Open
  this.http.open('GET', url, true);

  // On Load
  const self = this; // a fix for the problem listed below which will capture the scope of 'this' and we can use that scope inside the function.
  this.http.onload = function() {
    if (self.http.status === 200) {
      // this.http.status is undefined here inside the funciton cuz 'this' scopes to the function itself not the parent, ES6 arrow function fixes this issue
      callback(null, self.http.responseText); // insted of just sending back response, we want to send back an error if there is one, like nodeJS
    } else {
      callback(`Error: ${self.http.status}`); // if there is an error, it will display that code through the error
    }
  };

  // Send
  this.http.send();
};

// Make an HTTP POST Request

easyHTTP.prototype.post = function(url, data, callback) {
  // takes the data that we need to send out
  // OPEN
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json'); // we also need to set the content type, which is done in the http header. we essentially need to set the type of data we will be working with

  const self = this; // bind self scope

  // LOAD
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  // SEND, but we are sending json, so we need to turn that into a string so the api can accept it, we do this with the stringify mehtod, like sending somehting to the local storage
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  // OPEN
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json');

  // LOAD
  const self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  // SEND
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  // OPEN
  this.http.open('DELETE', url, true);

  // ONLOAD
  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, 'The Post has been Deleted');
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  // SEND
  this.http.send();
};
