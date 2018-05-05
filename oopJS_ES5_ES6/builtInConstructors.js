// Built in Constructors  -- not used very often, but nice to know

// String

const name1 = 'Jeff'; // normal way
const name2 = new String('Jeff'); // using built in constructor

console.log(name2); // returns the string as a primitve string object

console.log(typeof name1); // string
console.log(typeof name2); // object 


// will evaluate to true and log YES
if (name1 === 'Jeff') {
  console.log('Yes');
  
} else {
  console.log('No');
  
}


// the contents match, but not the typof, which is the reason we dont use constructor for strings so it will evaluate to false and log No
if (name2 === 'Jeff') {
  console.log('Yes');
  
} else {
  console.log('No');
}

// if we want to execute the 'Yes', we need to use == instead of === 


// Numbers
const num1 = 5;
const num2 = new Number(5); // number Object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); // boolean Object

// Function

const getSum1 = function (x, y) { // normal function declaratiobn
  return x + y
}
console.log(getSum1(1,1)); // 2 

const getSum2 = new Function('x', 'y', 'return x + y') // 1st argulments, when arguments finish then it is the finction body

console.log(getSum2(2,2));  // 4

// Objects 

const john1 = {name: 'john'}; // regular way of object declaration
const john2 = new Object({name: 'John'}); // same as above if we console log it

// Arrays
const array1 = [1,2,3,4]; // regular declaration
const array2 = new Array(1,2,3,4); // this is used mostly for converting some data, will be the same as array1 when logged
console.log(array2);

// Regular Expressions

const regex1 = /\w+/; // loggs /\w+/ we have to wrap our regex in / regex /
const regex2 = new RegExp('\\w+') // need the extra \ because we need to escape the \ in order to get it in the console
console.log(regex1);
console.log(regex2);














