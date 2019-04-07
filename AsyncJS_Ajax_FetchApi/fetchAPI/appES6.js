// fetch API returns a promise so we use the .then(function () {do somehting}) syntax and run a function after we get the file

// GET LOCAL TEXT FILE DATA

document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error));
}

// GET LOCAL JSON DATA
document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(post => (output += `<li>${post.title}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}

// Get Data from API

document.getElementById('button3').addEventListener('click', getExternalApi);

function getExternalApi() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(user => (output += `<li>${user.login}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}
