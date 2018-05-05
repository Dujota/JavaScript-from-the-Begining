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

      let output = '';

      if (response.type === 'success') { // always check that we got a sucess after json conversion
        
        response.value.forEach(function(joke) {
          output += `
          <li> ${joke.joke} </li>
          `
        });
      } else {
        output += `<li> Something Went wrong with the API  </li>`
      }

      document.querySelector('.jokes').innerHTML = output;
      
      
    }
  }

  // Send
  xhr.send();

  e.preventDefault();
}