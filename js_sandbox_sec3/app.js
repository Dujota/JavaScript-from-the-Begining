// DOM SELECTORS FOR SINGLE ELEMENTS
//DOM methods to pull things from the dom, replaced JQuery for dom manipulation and selection.

//They will allow us to grab one element by its id or class. If we use the selector to grab a class, it will select the first one in the "list" of classes that match

// document.getElementbyID()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className); // will pull any class names that are on the same tag as the id that was selected. 
console.log(document.getElementById('task-title').innerHTML); // can get the conetns of the selected item

// Change the styling of a selected element we do document.getElementbyID().style.whateverCssProperty = 'value';

const taskTitle = document.getElementById('task-title')  // it is bad practice to keep repeating document.getElementById('task-title')..... instead of repeating ourselves, we cash it into a variable 

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// to make something dissapear, we map it to an event ex, click on something and then item dissappears. We do this by setting style.display = 'none'

// document.getElementById('task-title').style.display = 'none';

// we only use the .style to implement events or dynamic functionality

// Change Content
taskTitle.textContent = 'Task List'; // changes the text in the element 1st way
taskTitle.innerText = 'My Tasks'; 
taskTitle.innerHTML = '<span style="color:red"> Task List </span>' ; // we insert the markup and the inline style into the DOM

// Document.querySelector(); // works like jquery sinc we can put any css selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red' // it is a single selector so it will impact only the first one
document.querySelector('ul li').style.color = 'blue'; //can use any kind of css selector
document.querySelector('li:last-child').style.color = 'red'; // can use pseudo selectors
document.querySelector('li:nth-child(3)').style.color = 'yellow' //can select a particular child with the :nth-child(#) selector
document.querySelector('li:nth-child(4').textContent = 'HelloWorld';

document.querySelector('li:nth-child(odd)').style.background = '#CCC'; //even if we choose even or odd, it will impact the 1st odd or even to modify since query selector only picks first one thats the only one that will be impacted

document.querySelector('li:nth-child(even)').style.background = '#AAA';


