const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post one'}
];

function createPost(post) {
  return new Promise(function (resolve, reject) { // construct the new promise, pass in a function that takes two arguments, resolve is what to do when async done, reject is for any error handling. 

    // we move the setTimeout function inside the promise, and instead of a callback we invoke the resolve where the callback would have been
    setTimeout(function () {
      posts.push(post);
      resolve(); // invoke the promise where the callback would have been 
    }, 2000);
    
  });


}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({
  title: 'Post Three',
  body: 'This is the third post'
}).then(getPosts); // instead of passing in a function for the callback we use the .then syntax at the end which will take the function we want to run after we are done with the create post. essentially it will run getPosts after the set timeout 

getPosts();