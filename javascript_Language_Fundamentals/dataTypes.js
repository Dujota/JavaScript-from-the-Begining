//Primitive DataTypes

// String
const name = 'John Doe';
console.log(typeof name);


// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

 // Null
 const car = null;
 console.log(typeof car); // returns object but it is a bug , can check stack overflow 

 // Undefined

 let test; // has to be let so we dont get error with const 
 console.log(typeof test);

 // Symbol

 const sym = Symbol();
 console.log(typeof sym);
 
 // REFERENCE TYPES - Objects

 //Array
 const hobbies = ['movies', 'music'];
 console.log(typeof hobbies);

 // Object Literal
const address = {
  city: 'Boston',
  state: 'MA',
} 
console.log(typeof address);

// Dates
const today1 = new Date();
console.log(today1);
console.log(typeof today1);

console.clear(); // CLEARING CONSOLE HERE
