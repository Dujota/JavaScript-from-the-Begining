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