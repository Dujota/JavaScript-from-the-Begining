document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Objhect
  const xhr = new XMLHttpRequest(); // instantiating a new XHR object and saving it 

  // Open - specify the type of request and the object we want to do it on
  xhr.open('GET', 'data.txt', true); // (reuqst type, file/url, async?)

  // Load now
  xhr.onload = function () {
    
  }

  

}