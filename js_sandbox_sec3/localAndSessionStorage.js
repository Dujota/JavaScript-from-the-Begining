// LOCAL AND SESSION STORAGE
 
/*
local storage is part of the window (type window in console)

set key alue pairs, the value must be a string, can save arrays and objects, but must convert them into a string using JSON.stringify and when you pull the data to use it, you need to use JSON.parse
*/

//difference between local vs session , local will stay until its manually cleared while session is destroyed when browser is closed, but the api is eactly the same


/*

// set local storage item

localStorage.setItem('name', 'John'); // localStorage.setItem('key', 'value');  can check in inspect/application/storage
localStorage.setItem('age', '30');

// set session storage item
sessionStorage.setItem('name', 'Beth');

// remove from storage

// localStorage.removeItem('name');


// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();


console.log(name, age);

*/

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;
  
  let tasks; // initialize the variable

  // unless we store in array, it will just overide the inital save but first we check if there is a value
  if (localStorage.getItem('tasks') === null) {
    tasks = [] // if localstorage is empty, then create the array
  } else { // otherwise take out the data and create an array with json.parse
    tasks = JSON.parse(localStorage.getItem('tasks')); // need to parse it so we get an array back instead of a string 
  }

  // we now can push the new task back into the parsed array and then we are ready to resave.
  tasks.push(task);
  
  // console.log(typeof tasks);
  
  
  localStorage.setItem('tasks', JSON.stringify(tasks));  // we need to stringify/convert it back to a string from array 
  alert('Task Saved');
  // console.log(task);         
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'))

// when we pull data from local storage and parse it back to array we can do array methods against it. 
tasks.forEach(function(task) {
  console.log(task); 
});