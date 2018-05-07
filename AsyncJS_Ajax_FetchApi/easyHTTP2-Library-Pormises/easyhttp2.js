/** 
 EasyHTTP Library
 Library for making HTTP Requests

 @version 2.0.0 
 @author Dujota
 @license MIT
**/

class EasyHTTP {
  // Make an HTTP GET Request

  // if we dont wrap the whole fetch in a promise, if we save the response in a variable and try to log it, we will get undefined. 
  get(url){
    return new Promise((resolve, reject) => { // promise will always take a resolve and reject
      fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => {reject(error)});
    });
    
  }

  // Make an HTTP Post Request

  // for the post we need to add an object with some identifiers for the data and what we are actually trying to do, similar to how xhr needs to define the header, the object has a special format that can be obseved below. so post takes two parameters url & header object
  post(url, data){
    return new Promise((resolve, reject) =>{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    });
  }
}


