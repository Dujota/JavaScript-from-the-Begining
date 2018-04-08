// FUNCTION DELCARATION 

//doesnt do anything unless you invoke it

//in ES6 we can define the default value of the parameter inside the function itself instead of using the typeof conditionals
function greet(firstName = 'John', lastName='Doe') {
  //default in es5
  // if(typeof firstName === 'undefined') {firstName = 'John'}
  // if (typeof lastName === 'undefined') {lastName = 'Doe'}
  // console.log('Hello');
  return `Hello ${firstName} ${lastName}`
}

console.log(greet()); // we are now invoking it

// FUNCTION EXPRESSIONS - basically putting a function as a variable assignment

// can be a named or annonymous function but usually they are annonymouse
const square = function (x=2) {
  return x * x
}; // we need the semicolon because it is a variable

console.log(square(4));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs - basically a function that you declare and  run at the same time, and it needs to be an expression. We can make it an expression by putting into parenthesis () and then followed by (); to invoke

/* Syntax is 
(function name(params) {
  some logic inside here
})();
*/
 
(function () {
  console.log('IIFE Ran...');
  
})();

(function (name) {
  console.log(`Hello ${name}`);
  
})('Brad');

console.clear();
// this is really useful for module design patterns 


// PROPERTY METHODS -- when a function is put inside an object its called a method

const todo = {
  add: function () {
    console.log('Add todo..'); 
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
    
  }
}

// adds a new function to the object that was declared, if we call the object after we assign the new function to it, you will see it appear there and then we can call it later as a method
todo.delete = function () {
  console.log('delete todo...');
  
}

todo.add(); // calls the function add in the object
todo.edit(22); // calls the edit function in the object
todo.delete(); // calling the delete method that we added earlier to the object
console.log(todo); // you can see all the functions in the object including delete that was added.

console.clear();