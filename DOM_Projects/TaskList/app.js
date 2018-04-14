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
  // add Task event
  form.addEventListener('submit', addTask);
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

  // Clear the input
  taskInput.value = '';

  // stop the form submit
  e.preventDefault();
}
