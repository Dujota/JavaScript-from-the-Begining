// Keyboard and Input Events

const form = document.querySelector('form'); // if have many forms, its better to use the id
const taskInput = document.getElementById('task');

// Clear input

taskInput.value = ''; // this somehting we ofter run after submitting a form in order to clear it out, very common for forms


form.setAttribute('action', "index.php"); // added a new attribute to force the submit to redirect. 
form.addEventListener('submit', runEvent); // setup the event listener


function runEvent(e) {
  console.log(`EVENT TYPE:  ${e.type}`);   
  e.preventDefault();// usually an event that hits submit, will reload the page, we usually need this on submit event listeners

  // Get Input Value
  console.log(taskInput.value);// we get the value of the submitted item
}


const heading = document.querySelector('h5');


// KEYDOWN
taskInput.addEventListener('keydown', runKeydownEvent); 

function runKeydownEvent(e) {
  console.log(`KEYDOWN EVENT: ${e.type}`);
  
  console.log(e.target.value); // target is the element the event happens on and the value is the key we pressed

  heading.innerText = e.target.value // we can take the keydown and render it somewhere else on the page  
}

// KEYUP
taskInput.addEventListener('keyup', runKeyupEvent);

function runKeyupEvent(e) {
  console.log(`KEYUP EVENT ${e.type}`);
  console.log(e.target.value); 
}

// KeyPress
taskInput.addEventListener('keypress', runKeypressEvent); //  generalized key event 

function runKeypressEvent(e) {
  console.log(`KEYPRESS EVENT ${e.type}`);
  console.log(e.target.value); 
}


// FOCUS

taskInput.addEventListener('focus', runFocusEvent); // focus is when you click inside an input and set it to focus mode

function runFocusEvent(e) {
  console.log(`FOCUS EVENT ${e.type}`);
  console.log(e.target.value); 
}

// BLUR

taskInput.addEventListener('blur', runBlurEvent); // opposite of focus, but need to be clicked into the focus event first 

function runBlurEvent(e) {
  console.log(`BLUR EVENT ${e.type}`);
  console.log(e.target.value); 
}

// Cut
taskInput.addEventListener('cut', runCutEvent);  // works with right click cut or cmd/ctr X

function runCutEvent(e) {
  console.log(`CUT EVENT ${e.type}`);
  console.log(e.target.value); 
} 


// Paste
taskInput.addEventListener('cut', runPasteEvent); // works with right click paste or cmd/ctr V

function runPasteEvent(e) {
  console.log(`PASTE EVENT ${e.type}`);
  console.log(e.target.value); 
} 



// The actual input event, which fires on any type of input received

taskInput.addEventListener('input', inputEvent); // works with right click paste or cmd/ctr V

function inputEvent(e) {
  console.log(`INPUT EVENT ${e.type}`);
  console.log(e.target.value); 
} 


const select = document.querySelector('select');

// CHANGE EVENT
select.addEventListener('change', changeEvent);

function changeEvent(e) {
  console.log(`SELECT EVENT ${e.type}`);
  console.log(e.target.value); 
}