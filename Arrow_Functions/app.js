
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



