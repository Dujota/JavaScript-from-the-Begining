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

console.clear();