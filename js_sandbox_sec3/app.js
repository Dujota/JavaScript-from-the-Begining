// DOM SELECTORS FOR MULTIPLE ELEMENTS
// they return a node list that behaves like an array but need to be converted to arrays in order to use array methods against them 


//document.getElementsByClassName

let items = document.getElementsByClassName('collection-item'); // gets all the elements with the classname of collection-item and returns a HTML COLLECTION list that we can call properties on
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

console.clear();

// document.querySelectorAll();  can od a for each and other array methods without converting

//can use any css selector 
const allItems = document.querySelectorAll('ul.collection li.collection-item');


//can do array mehtod on the node list 
allItems.forEach(function(item, index) {
  item.textContent = `${index}: Hello, i changed this with query selector All loop`
});

console.log(allItems);

//select odd or even, can use any psueudo selector 
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


//using a for each
liOdd.forEach(function(li, index) {
  li.style.background = 'blue'
});

//using a for loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'lightgreen'  
}









