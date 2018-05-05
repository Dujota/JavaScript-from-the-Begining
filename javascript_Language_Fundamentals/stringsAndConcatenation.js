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

console.clear();