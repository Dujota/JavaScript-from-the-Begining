// IF STATEMENTS AND COMPARISON OPERATORS

// basic syntax: "C style"
/*
if (condition) {
  do something
} else {
  do something else
}
*/

const id = 100;

// EQUAL TO 
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}

// NOT EQUAL TO

if (id != 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}

// EQUAL TO VALUE AND DATA TYPE
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}

// NOT EQUAL TO VALUE AND DATA TYPE
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}

console.clear();
// **** BY DEFAULT USE THE TRIPLE EQUAL SIGN === OR THE !== FOR NOT EQUAL FOR COMPARISONS

// this if statement works just fine as long as the id variable is declared, we get around this by using the typof operator to check for undefined and then it will work

// so we test if it exists by checking if it is undefined
if (typeof id2 !== 'undefined') {
  console.log(`the id is ${id}`);
} else {
  console.log('NO ID'); 
}


// GREATER THAN OR LESS THAN

if (id > 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}


if (id <= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); 
}


// IF ELSE

/* if(condition){
  do something
} else if(second condition) {
  do somehting else
} else if (third condition) {
  do something else
} else {
  closes the conditional loop with an else and no condition
}
*/
const color = 'yellow';

if (color === 'red') {
  console.log('color is red');
} else if (color === 'blue'){
  console.log('color is blue'); 
} else {
  console.log('color is not red or blue');
}

// LOGICAL OPERATORS

// if we want to test more than one thing we can use the operators

const name4 = 'Steve';
const age4 = 20;

// AND &&
if (age4 >0 && age4 <12) {
  console.log(`${name4} is a child`);
} else if (age4 >=13 && age4 <= 19) {
  console.log(`${name4} is a teenager`);
} else {
  console.log(`${name4} is an adult `);
}

// OR || 

if (age4 < 16 || age4 > 65 ) {
  console.log(`${name4} cannot run in race`);
} else{
  console.log(`${name4} is a registered for the race`);
  
}

//SHORTHAND TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

/* 
ternerary works just like an if statement 
first we have condition id === 100
? represents the if 
'Correct' outputs when condition = true
: represents the else
'Incorrect' outoputs when condition = false
*/


//WITHOUT BRACES -- not recommended

if(id ===100)
  console.log('correct');
else
  console.log('incorrect');


console.clear();