document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // console.log('get jokes');
  //can also grab it with querySelector('input[type="number"])
  const number = document.getElementById('number').value; 

  // Initialize XHR 
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  //OnLoad (what to do when we get this data?)

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      
    }
  }

  // Send
  xhr.send();

  e.preventDefault();
}