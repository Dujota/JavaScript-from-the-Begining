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

var name = 'John Doe';
console.log(name);

//reassign variable values
name = 'Steve Smith';
console.log(name);

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


