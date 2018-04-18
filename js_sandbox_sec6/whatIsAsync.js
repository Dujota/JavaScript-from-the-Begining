// What is Asyncronous Programming?

// working with Ajax and fetch Api 


/* What is syncronous code? 

posts = loadPostsSync();

// ... wait til posts are fetched
// ... do something with posts

doTheNextThing(); // has to wait until posts load */


/* WHAT IS ASYNCHRONOUS CODE? 
we pass in a callback function, which will run and fetch posts, but runs in the function so the program doesnt get hung up. 

loadPostsAsync(function () {
  // ... wait til posts are fetched
  // ... do something with posts
});

doTheNextThing(); // Does NOT have to wait until posts load */


/* Most Async Code you work with will be a part of an API or Library !!

- XMLHttpRequest & Fetch
- jQuery Ajax, Axios, other HTTP libraries
- Node.js fs(filesystem) module


There are a few ways to work with Async code

1.) Callbacks (example above)
2.) Promises
3.) Async/Await
*/