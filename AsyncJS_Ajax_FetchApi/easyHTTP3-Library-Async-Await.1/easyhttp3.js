/**
 EasyHTTP Library
 Library for making HTTP Requests

 @version 3.0.0
 @author Dujota
 @license MIT
* */

class EasyHTTP {
  // Make an HTTP GET Request

  static async get(url) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP Post Request

  static async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT Request
  static async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  static async delete(url) {
    const response = await fetch(url, {
      mehtod: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }, // removed the body since we are deleting
    });
    const resData = await 'Resource Deleted ... '; // for deleted portion we just return whatever msg we wanted instead of the response.json()
    return resData;
  }
}
