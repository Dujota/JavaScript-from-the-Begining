let regex;

regex = /hello/; // the is an escape and anything inside the two pipes, it will be taken literally as it is entered. 
regex = /hello/g; // g = Global serach, meaning that it iwll look at the whole paragraph for all instances of hello, not just the first one 
regex = /hello/i; // i = case insensitive


console.log(regex); // shows /hello/
console.log(regex.source); // shows hello 

// exec() - Return result in an array if there is a match or null if no match
const result = regex.exec('brad hello world');

console.log(result);  // returns an array with the match

/* you get 3 things from the result:
1.) the expression we are checking for
2.) it shows the index in the string where the 1st character starts from the original string
3.) the original input string
*/

// Accessing the object attributes from exec result
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false if there is a match
const res = regex.test('Hello');
console.log(res); // we get false, this is because regex is case sensetive. We fix it by adding i option to the end of the regex, see line 5


// match() - Return result array or null if there is a match

const str = 'Hello There';
const results = str.match(regex); // works similar to exec() but does not run off the regular expression, we instead create the string we want to match and then create a result that is the string.match, works almost in reverse to how exec() works 
console.log(results);
// even if the original regex we use to match is lower case, it will always show us what it found as a match

// search() - returns the index of the first match and if not found, it returns -1 (similar to indexOf() function)

const string = 'someword Hello buddy';
const resul = string.search(regex);
console.log(resul);  // returns the index which is 9 












