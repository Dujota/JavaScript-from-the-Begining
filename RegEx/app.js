//Initialize our Regex 
let re;

// Literal Characters
re = /hello/;
re = /hello/i;


// String to Match
const str = 'Hello World';

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