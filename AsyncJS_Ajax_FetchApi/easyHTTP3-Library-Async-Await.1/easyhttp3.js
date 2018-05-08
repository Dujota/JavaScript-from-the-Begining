/** 
 EasyHTTP Library
 Library for making HTTP Requests

 @version 3.0.0 
 @author Dujota
 @license MIT
**/

class EasyHTTP {
  // Make an HTTP GET Request

 
  async get(url){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const resData = await response.json();
    return resData;
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

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        mehtod: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        } // removed the body since we are deleting
      })
      .then(response => response.json())
      .then(() => resolve('Resource deleted ... ')) // we dont send back data, instead we send back a string message
      .catch(error => reject(error))
    });
  }
}


