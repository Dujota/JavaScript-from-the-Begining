//Initialize our Regex 
let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Meta Character Symbols 
re = /^h/i; // this means:  must start with ^ = starts  
re = /d$/i;  // this means: must end with $ = ends
re = /^hello$/i; // this says it can only be hello, so it has to start and end with hello
re = /h.llo/i; // this matches any ONE charcater in the place where the . is
re = /h*llo/i; // this matches any characters 0 or more times in the place where the * is
re = /gra?e?y/i; // optional character, which will match with either character or neither

re = /gra?e?y\?/i; //Escape Characters are anything after a forward slash \

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be any charater that is inside the brackets
re = /[GF]ray/i; // can be placed anywhere inthe string to match
re = /[^GF]ray/i; // Match anything EXCEPT!!!! the characters in the brackets, not to be confused with the start with
re = /[A-Z]ray/; // Match any uppercase letter in the range specified
re = /[a-z]ray/; // Match any lowercase letter in the range specified
re = /[A-Za-z]ray/; // This will match ANY letter of any case
re = /[0-9]ray/; // Can also match any numbers/digit in a range, but it will match 10ray, but if we want to match more, then we need to add another range
re = /[0-9][0-9]ray/; // will match 10ray

// Braces {} - Quantifiers 

// String to Match
const str = 'Gray?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
  if (re.test(str)) {
    console.log(`${str} matches the ${re.source}`); 
  } else {
    console.log(`${str} does not match the ${re.source}`);
  }
}

reTest(re, str);