
// Whats really nice, is that we can handle errors without stopping the entire script
try {
  // Produce a ReferenceError
  myFunction();

} catch (error) {
  console.log(error); // just log the error itself
  console.log(error.message); //  just logs the messsage, which is a string so we can append it to the DOM or somehting 
  console.log(error.name); // this will give us just the name/type of the error
  console.log(error instanceof ReferenceError); // checks for type of, outputs True 
} finally { // this will run no matter what happens above 
 console.log('the Finally statement runs no matter what the try,catch does');
 
}

console.log('Program Continues .... ');

// If we dont use try catch, then it will stop the program and the log above will not run

console.log('--------------------------------------------------------');


// Null Error
try {
  null.myFunction();
  
} catch (error) {
  console.log(error);
  console.log('Can put any error message if we wanted to');
  console.log(`${error.name} Passed the error.name to template literal`);
} 

console.log('--------------------------------------------------------');

try {
  // Will produce SyntaxError
  // eval('Hello World);

  // Will produce a URIError
  decodeURIComponent('%');
} catch (error) {
  console.log(error);
}


// Let's Create our own Custom Errors

const user = {email: 'someEmail@gmail.com'};

// check if the user has a name 
try {
  if (!user.name) {
    throw 'User has no name'; // the THROW KEYWORD SENDS THE ERROR!!!!
  }  
} catch (error) {
  console.log(error);
  
}
