// DEFINE UI VARS

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event 
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// DOM CONTENT LOADED - GET TASKS FROM LOCALSTORAGE 
function getTasks(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
  // Create li Element
  const li = document.createElement('li');
  
  // Add class
  li.className = 'collection-item'; 
  
  // Create Text node and Append to li
  li.appendChild(document.createTextNode(task));
  
  // Create new link element
  const link = document.createElement('a');
  
  // Add Class
  link.className = 'delete-item secondary-content' 
  
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  
  // Append Link to li
  li.appendChild(link);
  
  // Append li to ul
  taskList.appendChild(li);
  });
}

// ADD A TASK FUNCTION
function addTask(e) {
  if (taskInput.value === '') { // check if new task form is empty
    alert('Add a Task') 
  } 

  // Create li Element
  const li = document.createElement('li');
  
  // Add class
  li.className = 'collection-item'; // materialize class (ul use collection and li use collection-item)

  // Create Text node and Append to li
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Create new link element
  const link = document.createElement('a');
  // Add Class
  link.className = 'delete-item secondary-content' // materialize class, secondary content will float to the right on a list item

  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append Link to li
  li.appendChild(link);
  
  // Append li to ul
  taskList.appendChild(li);

  // Store in Local Storage

  storeTaskInLocalStorage(taskInput.value);

  // Clear the input
  taskInput.value = '';

  // stop the form submit
  e.preventDefault();
}

// STORE TASK FUNCTION

  /* Persist Data to Local Storage -- part of JS, no 3rd party software required. 
  After we add it to the DOM we will call another funciton that wills save the data into local storage
  */

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [] // if it doesnt exist, create an empty array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')) // if it does exist, then get it out and parse into array
  }

  // then push the new task to the parsed tasks array 
  tasks.push(task);

  // set it back to localStorage

  localStorage.setItem('tasks', JSON.stringify(tasks)); // now we put the whole array with the newly pushed items back into local storage by assigning it to tasks and JSON.stringify to convert back to a string which can be stored

}

// REMOVE TASK FUNCTION
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) { // makes sure we are selecting the right element on the event
    if (confirm('Are You Sure?')) { // pops a message, true if hit ok
      e.target.parentElement.parentElement.remove(); // remove parent of parent which is the li iteself li>a>i  
    } 
  }
}

// CLEAR TASKS FUNCTION

function clearTasks(e) {
  // taskList.innerHTML = ''; // option 1

  // use While (element.firstChild) {} method  Option 2
  // FASTER and more Preferred method, check https://jsperf.com/innerhtml-vs-removechild/
  
  while (taskList.firstChild) { // while there is still a child
    taskList.removeChild(taskList.firstChild) // keep removing 1st child until above condition is false
  }
}

// FILTER TASKS FUNCTION

function filterTasks(e) {
  const text = e.target.value.toLowerCase(); // get the string typed and always keep lowercase
  // take all list items
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    /*
    The indexOf() method returns the position of the first occurrence of a specified value in a string.
    This method returns -1 if the value to search for never occurs.
    */

    if (item.toLowerCase().indexOf(text) != -1) { // this checks if the text that was typed and saved in text variable exists in the task list, if true display block, if not, then remove (display = 'none')
      task.style.display = 'block';
    } else {
      task.style.display = 'none'
    }
  });
}

