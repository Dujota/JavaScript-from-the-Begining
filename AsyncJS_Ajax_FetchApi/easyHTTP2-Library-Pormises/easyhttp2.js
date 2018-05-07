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

  post(url, data){
    return new Promise((resolve, reject) =>{
      // for the post we need to add an object with some identifiers for the data and what we are actually trying to do, similar to how xhr needs to define the header
      fetch(url), { 
      }
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

}


