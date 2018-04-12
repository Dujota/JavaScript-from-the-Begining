//Traversing the DOM (moving up and down the DOM )

let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); // selects the first one

value = listItem
value = list

// different properties attached to the nodes selected above

// Get child Nodes
value = list.childNodes; // text nodes are the line breaks between the hmtl code which is why we use children 
value = list.childNodes[0]; // fist node
value = list.childNodes[0].nodeName;
value = list.childNodes[1].nodeType;

/*
THERE ARE MANY TYPES OF NODE TYPES:
1 - ELEMENT
2 - ATTRIBUTE (DEPRACATED)
3 - TEXT NODE
8 - COMMENT
9 - DOCUMENT ITSELF
10 - DOCTYPE
*/


// Get children element nodes
value = list.children; // returns an HTML Collection 

value = list.children[0];
list.children[1].textContent = 'list.children text conent';

// Children of Children
// list.children[3].children[0].id = 'test-link'; // add an id or do anything there  
value = list.children[3].children[0]; 

//first child
value = list.firstChild; // can return a text node
value = list.firstElementChild // returns the actual element, most likely will use this one

//last child
value = list.lastChild
value = list.lastElementChild

// count child elements 
value = list.childElementCount;

// Get parent node 
value = listItem.parentNode; // gets the parent node
value = listItem.parentElement; // gets the parent element, usually the same as parent node

value = listItem.parentElement.parentElement; // goes to the parent (ul) and then looks at the parent of that parent

// Get next sibling
value = listItem.nextSibling; // deals with any node on the node list so it can return a text node
value = listItem.nextElementSibling.nextElementSibling // can chain them, will always return an element from the node list

// Get previous sibling
value = listItem.previousSibling; // like the next sibling but works backwards
value = listItem.previousElementSibling; // if no more elements priopr to the one workign with, it will return null 

console.log(value);

console.clear();