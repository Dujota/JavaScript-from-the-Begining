// fetch API returns a promise so we use the .then(function () {do somehting}) syntax and run a function after we get the file

// GET LOCAL TEXT FILE DATA

document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function(response) {
      // the response is an object, we need to know what data type we are workign with so we can call on the correct object's attribute in the prototype
      return response.text(); // .text is a prototype function that returns a function, we can check by console logging it, so we need to add another .then
    })
    .then(function(data) {
      // on the second promise we get the data that returns from the text();
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(error) {
      // we now need to catch any error that may happen
      console.log(error);
    });
}

// GET LOCAL JSON DATA
document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('posts.json')
    .then(function(response) {
      // once we know what type of file we workign with then we save the response as the format we want/expect
      return response.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Get Data from API

document.getElementById('button3').addEventListener('click', getExternalApi);

function getExternalApi() {
  fetch('https://api.github.com/users')
    .then(function(response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function(data) {
      // console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}
