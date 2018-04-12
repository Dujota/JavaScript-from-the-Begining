// Create Element

const li = document.createElement('li');

// add a class
li.className = 'collection-item';

//add an id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'new item');


//create text node and append
li.appendChild(document.createTextNode('Hello World')); // append child just means you want to create something inside the selected element


//create new link element
const link = document.createElement('a');
//add class we need
link.className = 'delete-item secondary-content';
//add icon hmtl 
link.innerHTML = '<i class="fa fa-remove"></i>'

// append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

console.clear();