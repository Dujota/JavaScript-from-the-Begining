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

console.clear();

// REMOVE ELEMENT
const listItemsLi = document.querySelectorAll('li');
const listUl = document.querySelector('ul');

// Remove a specific list item
listItemsLi[0].remove();

// remove child element
listUl.removeChild(listItemsLi[3])


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('#new-item'); // can do first chile li:first-child
const aLink = firstLi.children[0]
let values;


// Classes

values = aLink.className //  gives us all the classes assigned to that variable 
values = aLink.classList // gives a class list which behaves like an array and we can do array mehtods on it

values = aLink.classList[0];
aLink.classList.add('test'); // can add a class to an element for toggling 
aLink.classList.remove('test'); // can remove class for toggling
values = aLink;

// Attributes

values = aLink.getAttribute('href'); //  pulls the href link in this case jsut the '#'
values = aLink.setAttribute('href', 'http://google.com'); // change that to new link ('attribute', 'new value')

values = aLink.hasAttribute('href'); //  check if it has href, if so, returns true
values = aLink.hasAttribute('ttile'); // false

aLink.setAttribute('title', 'Google') // now we add the attribute of title
values = aLink.hasAttribute('title'); // now it becmes true

values = aLink // will show the new title attribute we put on it

aLink.removeAttribute('title');


console.log(values);


