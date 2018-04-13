// Removing and Replacing Elements

/* how to replace and remove, how to work with classes - manipulate  classes & attributes - get attributes and change themm/add/remove */

// REPLACE ELEMENTS 

//Create an element
const newHeading = document.createElement('h2');

// add ID
newHeading.id = 'task-title';

//new Text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

//Parent -- we need to grab the parent
const cardAction = document.querySelector('.card-action')

// replace then pass in the two parameters for replace child (newElement, oldElement)
cardAction.replaceChild(newHeading, oldHeading);


console.log(newHeading);


// REMOVE ELEMENT
const listItemsLi = document.querySelectorAll('li');
const listUl = document.querySelector('ul');

// Remove a specific list item
listItemsLi[0].remove();

// remove child element
listUl.removeChild(listItemsLi[3])


// Cla
