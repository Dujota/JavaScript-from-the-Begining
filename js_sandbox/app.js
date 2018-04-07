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


// THE MATH OBJECT Methods and Properties
const num1 = 100;
const num2 = 50

let val;

// Simple Math with numbers 
val = num1 + num2; // 150
val = num1 * num2; // 1500
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0 modulus = remainder 

// Math Object -- means it has properties and methods 
val = Math.PI; //PI is a methods  returns pi
val = Math.E; // eulers 
val = Math.round(2.4); // 2

//rounding with Math
val = Math.ceil(2.4); // 3  rounds up 
val = Math.floor(2.4); // 2 rounds down

// square 
val = Math.sqrt(64); // 8

//power of multiplier
val = Math.pow(8, 2); // 64, we write the 1st number then the power exponent second

// absolute
val = Math.abs(-3); // 3 abosulte will always give postive #

// Min & Max 
val = Math.min(2,3,4,1,55,6,3,-2); // returns the smallest # -2 
val = Math.max(2,3,4,1,55,6,3, -2); // returns the largest # 55

// Random # 
val = Math.random(); // gives a random decimal # 

// if you want a random whole number you have to multiply by an integer
val = Math.random() * 20 + 1  // if we dont add + 1 it will generate a random # between 1-19 

// if we want to drop the decimal we have to wrap it in math.floor
val = Math.floor(Math.random() * 20 + 1) // This is very common in Javascript 


console.log(val);

// STRINGS AND CONCATENATION

const firstNames = 'Willaim';
const lastNames = 'Johnson';
const ages = 36;
const str = 'Hello there my name is Brad'
const tags = 'web design, web development, programming'

// initialize a new variable to log the results
let valName;

valName = firstNames + lastNames; // WilliamJohnson


// Concatenation

valName = firstNames + ' ' + lastNames; // Willaim Johnson 

// Append

valName = 'Brad ';
valName += 'Traversy'; // this appends (adds the new value to the existing one) creating output Brad Traversy


valName = ' Hello my name is ' + firstNames + ' and I am ' + ages; // Hello my name is William and i am 36

valName = `Hello my name is ${firstNames} and I am ${ages} old` // same output as above concatenation but using ES6 syntax and template literals

// Escaping
valName = ' That\'s awesome, I can\'t wait ' // can use double quotes or we can use \ to escape the character

// Length

valName = firstNames.length; // 7, we dont use () because length is a property not a mehtod 

// concat method, works like adding strings but using a method
valName = firstNames.concat(' ', lastNames); // same resule as the concatenate : William Johnson

// Change Case lower or upper

valName = firstNames.toLocaleUpperCase(); // WILLIAM

valName = firstNames.toLocaleLowerCase(); // william

//String as Arrays

valName = firstNames[0]; // W

// indexOf()

valName = firstNames.indexOf('W') // 0 is index of W 
valName = firstNames.indexOf('z'); // -1 will show if char is not in the string

valName = firstNames.lastIndexOf('l'); // 3 which is position 3

// charAt() .. opposite of indexOf

valName = firstNames.charAt(2); // returns l since l is at string[2]

// Get last Char *********VERY COMMON************
valName = firstNames.charAt(firstNames.length - 1) // this gets the last character of a string, this is a very common formula in JS wen dealing with strings

// substring()

valName = firstNames.substring(0, 4); // Will -- takes two arguments, starting point and ending position and will return everything from those two points

// slice() *********VERY COMMON************  mostly used with arrays to pull things out of arrays

valName = firstNames.slice(0, 4); // same as the substring

valName = firstNames.slice(-3); // returns iam, so it starts from the end and works backwords x# of characters 

// split() *********VERY COMMON************   Split strings into arrays based on a separator 
 valName = str.split(' '); // split at the space and create the following array: ["Hello", "there", "my", "name", "is", "Brad"] where each word is each index. 

 // works great if you have a form on a website with comma separated tags
valName = tags.split(','); // ["web design", " web development", " programming"]

// replace()

valName = str.replace('Brad', 'Jack'); // Hello there my name is Jack ... it replaces the first argument with the second argument in the replace() function

// includes()
valName = str.includes('Hello'); // returns boolean after it checks if the passed in string is inside the string being called on

console.log(valName);


// TEMPLATE LITERALS ( TEMPLATE STRINGS) compatible on all modern browsers

// most of the time you will be inserting html through javascript, which then we use template strings
const name3 = 'John';
const age3 = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;


// Without Template Strings (ES5) way

html = '<ul><li>Name: ' + name3 + ' </li><li>Age: ' + age3 + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// to make it more readable in (ES5)
html = '<ul>' +
        '<li>Name: ' + name3 + ' </li>' +
        '<li>Age: ' + age3 + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
      '</ul>';



// With Template Strings (ES6)

function hello() {
  return 'hello';
}

//basically works just like html inside the `` we can pass in functions or arithmatic or ternerary operators (one line conditional statements)
html = `<ul>
          <li> Name: ${name3} </li>
          <li>Age: ${age3}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${2+2}</li>
          <li>${hello()}</li>
          <li>${age3 > 30 ? 'Over 30' : 'Under 30'}</li> 
        </ul>
        `

// document.body.innerHTML = html;

// Arrays

//create some arrays

const nums = [43,56,33,23,44,36,5]; // popular implied array
const nums2 = new Array(22,45,33,76,54); // array constructor

const fruits = ['apple', 'bananas', 'orange', 'pear']

// can have any datatype mixed together
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date() ]
console.log(mixed);


let valArray;

// Get array lenght (how many values in array)
valArray = nums.length; // 7

// Check if is array
valArray = Array.isArray(nums);  // true 
// good way to test if something is array like dom node lists 

// Get single value
valArray = nums[3]; // 23, which is the 4th # becuase arrays start at 0

// Insert into Array 
nums[2] = 100; // 100 will be position 2 in array now

//find the index of value
valArray = nums.indexOf(36) // 5 

// Mutating array 

// Add on to end 
nums.push(250); //250 is the last value in array

// Add on to front
nums.unshift(120); // 120 is the first value in array

// Take off from end
nums.pop(); // gets rid of the 250 that was added last

// Take off from the front 
nums.shift(); // drops the 1st postion which is the 120 we just added 

// Splice values
nums.splice(1,3); // [43, 44, 36, 5] .. first argument is where the splice begins and second argument is where it ends, all else remains in the array

// Reverse the Array 
nums.reverse();

// Concatenate Arrays
valArray = nums.concat(nums2); // adds the two arrays together to make one big array

// Sorting arrays
valArray = fruits.sort(); // sorts the contents of the fruits array alphabetical since they are strings

valArray = nums.sort(); //  it sorts based off of the 1st #, in order for us to get a proper sort, we need a callback function

// Use the "compare function" to sort numbers in array

valArray = nums.sort(function (first, second) {
  return first - second
}); // [5, 36, 43, 44] ascending sort for first - second

valArray = nums.sort(function (first, second) {
  return second - first
}); // [5, 36, 43, 44]  descending sort for second - first

// Find 
function under50(num) {
  return num < 50;
};

function over50(num) {
  return num > 50;
};
valArray = nums2.find(under50); // 22
valArray = nums2.find(over50); // 76

console.log(nums2);
console.log(nums);
console.log(valArray);

// OBJECT LITERALS

const person1 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }, // within objects we can access its properties
  getBirthYear: function() {
   return 2018 - this.age; // when inside an object, we need to use the this keyword which will pertain to the object itself
  }
};

let valObject;

valObject = person1;

// get a specific value

valObject = person1.firstName // Steve
valObject = person1['firstName']; // same as above but 1st method is preferred. 
valObject = person1.hobbies[1]; // sports
valObject = person1.address; // whole address object
valObject = person1.address.state; // FL
valObject = person1.getBirthYear();


console.log(valObject);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 53}
];

for (let index = 0; index < people.length; index++) {
  console.log(people[index].name); // displays the names of the person for each instance of the loop
}

console.clear();

// DATE & TIME

let valDate;

const today = new Date(); // if nothing specified, then it will pick up time and date now.

// below are different ways to delcare dates into the Date object, check MDN docs for more ways to declare date 
let birthday = new Date('9-10-1981 11:25:20');
birthday = new Date('September 10, 1981');
birthday = new Date('9/10/81');
valDate = birthday; // displays the date as entered above for the new Date(); function

valDate = today.getMonth(); // 0 based which means january is # 0, so we would need to add 1 to get the exact month number

valDate = today.getDate(); // gives the day of the month  as a # example 4/7/18 returns 7
valDate = today.getDay(); //  returns the # of the day in the week example saturday = 6 
valDate = today.getFullYear(); // gives the year of the date 


console.log(valDate);

