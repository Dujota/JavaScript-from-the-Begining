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

var greeting;
console.log(greeting); // will be undefined
 greeting = 'Hello there';
console.log(greeting);

// one of the reasons we initialize a variable with no value is for if cases 


