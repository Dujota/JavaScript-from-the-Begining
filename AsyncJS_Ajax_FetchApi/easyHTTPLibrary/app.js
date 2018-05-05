const http = new easyHTTP;

// Get Posts 
http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) { // since we added an error to the callback, then we need to add in the parameter here or else it will display null first, then we test for the error. 
  if (error) { // so it will check if there is an error that is not null by passing condition and then displayt that in the log instead of the response, else the response 
    console.log(error);
    
  } else {
    console.log(posts); 
  }
});   // here we pass in a callback to get the posts while the page is loading so that we dont get undefined, we need this inside the library prortotype function so we can execute a callback when passing in parameters 