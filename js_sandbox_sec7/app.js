document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Objhect
  const xhr = new XMLHttpRequest(); // instantiating a new XHR object and saving it 

  // Open - specify the type of request and the object we want to do it on
  xhr.open('GET', 'data.txt', true); // (reuqst type, file/url, async?)
  console.log('ReadyState:: ', xhr.readyState);

  // Optional - Used for Spinners/Loaders, can check if data is being loaded/fetched and display somehting else in the meantime
  xhr.onprogress = function () {
    console.log('ReadyState:: ', xhr.readyState);
  }

  

  // Load now
  xhr.onload = function () { // at this point we are at step 4
    console.log('ReadyState:: ', xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1>`;
    } 
  }

  xhr.onerror = function () {
    console.log('Request Error occurred');
  }

  // Send the data
  xhr.send();

  /*
    readyState Values
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
  */

  /*
  HTTP STATUSES
  200: OK
  403: Forbidden
  404: Not Found
  */
}