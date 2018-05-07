
/*
ES5 function

const sayHello = function () {
  console.log('Hello');
}

*/


// ES6 Conversion

/*
const sayHello = () => { // drop the function keyword and add an arrow between the parenthesis and the curly bracket
  console.log('Hello');
}
*/

// One Line Function does not need braces
const sayHello = () => console.log('Hello');

// One Line returns 

/* ES5 way
const oneLineReturns = function () {
  return 'Some Text';
}
*/

// the above is reduced to :
const oneLineReturns = () => 'Some text'

sayHello();
console.log(oneLineReturns());


//RETURN OBJECT
// WATCH OUT FOR OBJECT LITERALS!!!!!!!!! anything that has curly braces needs to be wrapped in parantheses ({object literal}) otherwise it will think that the braces are a funciton
const beCarefullWithThese = () => ({ msg: 'Hello'}) 

console.log(beCarefullWithThese());


// Single param does not need paranthesis
const logName = name => console.log(`Hello ${name}`);
logName('Brad');

// Multiple params need to be wrapped by paranthesis otherwise will throw an error 
const logFullName = (name, lastname) => console.log(`Hello ${name} ${lastname}`);
logFullName('Brad', 'Traversy');


// ARROW FUNCTIONS FOR CALLBACKS

const users = [
  'Nathan', 'John', 'William'
]

// ES5 Map function of array
/*
const nameLengths = users.map(function (user) {
  return user.length
}); // takes the input array and processes it to return back a value for each array item 
*/

//ES6 Conversion

// apply the one line rules to the map function
const nameLengths = users.map( user => user.length );

console.log(nameLengths); // [6,4,7] which is length of each name in the array 

// 







