/** 
 EasyHTTP Library
 Library for making HTTP Requests

 @version 2.0.0 
 @author Dujota
 @license MIT
**/

class EasyHTTP {
  // Make an HTTP GET Request
  get(url){
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
}