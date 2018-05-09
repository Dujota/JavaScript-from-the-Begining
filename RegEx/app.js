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

re = /gra?e?y\?/i;; //Escape Characters are anything after a forward slash \


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