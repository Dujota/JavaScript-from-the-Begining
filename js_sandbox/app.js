// one line comments

/*
multi 
line 
comments
*/

console.log('Hello World');
console.log(123);
console.log(true);
var greetings = "hello";
console.log(greetings);
console.log([1,2,3,4]);
console.log({a:1, b:2});

console.table({a:1, b:2})

console.error('this is some error');

console.clear();

console.warn('this is a warning');

//if oyu want to see how long an operation takes, you put it between time and timeEnd
console.time('hello');
console.log('how long does this take?');
console.log('how long does this take?');
console.log('how long does this take?');
console.log('how long does this take?');
console.log('how long does this take?');
console.log('how long does this take?');
console.timeEnd('hello');



//VARIABLES

// var, let, const

var names = 'John Doe';
console.log(names);

//reassign variable values
names = 'Steve Smith';
console.log(names);

// initialize variables

var greeting; // one of the reasons we initialize a variable with no value is for if cases 
console.log(greeting); // will be undefined
 greeting = 'Hello there';
console.log(greeting);

// letters, numbers, _, $ are the only characters allowed for variable names
// Can not start with number

// conventions for multi word variables is camelCase
var firstName = 'John'; // camel case <-- preferred
var first_name = 'James'; // underscore
var FirstName = 'Tom'; // Pascal case 

// using Let 

let name1; // initialize
let name2 = 'some name'
console.log(name2);

name1 = 'John Doe'
console.log(name1);

// using const
// can not re-assign the variable, but we can mutate the data inisde the object or array. 
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sarah'
person.age = 32
console.log(person);

const numbers = [1,2,3,4,5]
console.log(numbers);

numbers.push(6);
console.log(numbers);

// we cannot do numbers = somehting new  or person = {new object}


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
 
 // REFERENCE TYOES - Objects

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
const today = new Date();
console.log(today);
console.log(typeof today);

console.clear(); // CLEARING CONSOLE HERE


// TYPE Conversion

let value; // initialize

// number to string
value = 5

value = String(555); // Convert with String();
value = String(4+4); // '8'

// Boolean to string
value = String(true); // 'true'

// Date to string
value = String(new Date()); // 'date as a string'

// Array to String
value = String([1,2,3,4]); // '1,2,3,4'

// Alternate conversion with toString() method

value = (5).toString(); // '5'
value = (true).toString(); // 'true'

// String to Number
value = Number('5'); // 5
value = Number(true); // 1
value = Number(false); // 0
value = Number(null); // 0
value = Number('helllo'); // NaN -> not a number
value = Number([1,2,3]) // NaN 

// Additional way to do the above conversion

value = parseInt('100'); // 100, but drops any decimals 
value = parseFloat('100.30') // 100.3 , by default it drops the 0 at the end,can use toFixed(2) to force the 0 decimal

// Output

console.log(value);
console.log(typeof value);
// console.log(value.length); -- this only works on strings
console.log(value.toFixed());;


// case of type mix where JS will assume which type you want and return somehting that is defaulted in this case instead of 11 it will return 56 as a string, which is 5+6 concatenated 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2
console.log(sum); // 56
console.log(typeof sum); // string

console.clear();


const num1 = 100;
const num2 = 50

let val;

// Simple Math with numbers 


console.log(val);





