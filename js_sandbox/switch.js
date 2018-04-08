// SWTICHES -another way to validate conditions

/* syntax is switch (variable) 
  case value : 
    do somehting here
    break; <--- closes the loop

  continue with as many cases as we want until were done and instead of an else
  statement we use default

  default: <--- works like an else 
    do somehting here <--- this will be output if all other cases === false
    break; <-- this will close the loop if all other cases are false

*/


// suggest to use a switch wehn there are a lot of different cases for an if statement and a switch will be easier to read and follow, it works exactly like an if else statement
const colors = 'yellow';

switch (colors) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;

  default:
    console.log('color is not red or blue');
    break;
}


// SWITCHES WITH DATES
let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday'
    break;
    case 1:
    day = 'Monday'
    break;
    case 2:
    day = 'Tuesday'
    break;
    case 3:
    day = 'Wednesday'
    break;
    case 4:
    day = 'Thursday'
    break;
    case 5:
    day = 'Friday'
    break;
    case 6:
    day = 'Saturday'
    break;   
}
console.log(`Today is ${day}`);

console.clear();