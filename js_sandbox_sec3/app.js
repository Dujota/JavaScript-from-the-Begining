// DOM SELECTORS FOR MULTIPLE ELEMENTS
// they return a node list that behaves like an array but need to be converted to arrays in order to use array methods against them 


//document.getElementsByClassName

let items = document.getElementsByClassName('collection-item'); // gets all the elements with the classname of collection-item and returns a node list that we can call properties on
console.log(items); // displays the html collection, much like array and if logged we can see the attributes which we can access

console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';


// Dont have to just use the selector in a global scope, lets try selecting from ul

let listItems =  document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems); // this selector will only select the class name collection-item that live inside a ul only


// document.getElementByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert to HTML Collection to Array 

lis = Array.from(lis);
lis.reverse(); // once converted we can run array methods 

lis.forEach(function (li, index) {
  console.log(li);
  console.log(li.className);

  li.textContent = `${index} : Can change text after converted`

  
  
});

console.log(lis);



