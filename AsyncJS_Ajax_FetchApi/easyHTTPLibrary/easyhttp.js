function easyHTTP() {
  this.http = XMLHttpRequest();
}

// Prototype Methods for this class we are constructing

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url) {
  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (this.http.status === 200) {
      console.log(this.http.responeText);      
    }
  }

  this.http.send();
}

// Make an HTTP PUT Request

// Make an HTTP POST Request

// Make an HTTP DELETE Request

