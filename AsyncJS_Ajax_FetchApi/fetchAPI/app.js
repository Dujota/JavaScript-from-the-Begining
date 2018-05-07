document.getElementById('button1').addEventListener('click', getText);
 
//fetch API returns a promise so we use the .then(function () {do somehting}) syntax and run a function after we get the file
function getText () { 
  fetch('test.txt')
  .then(function (response) { // the response is an object, we need to know what data type we are workign with so we can call on the correct object's attribute in the prototype
    return response.text(); // .text is a prototype function that returns a function, we can check by console logging it, so we need to add another .then
  })
  .then(function (data) { // on the second promise we get the data that returns from the text(); 
    document.getElementById('output').innerHTML = data;    
  })
  .catch(function (error) { // we now need to catch any error that may happen
    console.log(error); 
  });
}


document.getElementById('button2').addEventListener('click', getJSON);

function getJSON () {
  fetch(posts.json)
}