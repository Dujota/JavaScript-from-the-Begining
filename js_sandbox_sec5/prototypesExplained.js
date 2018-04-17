// Prototypes Explained

/* most languages use class based objects, but ES5 does not.
  each object in JS has a protoype, the prototype itself is an object
  all objects inheret their properties and methods from their prototype
*/

// Object literals inherit from Object.protoype
// Person.prototype 

// Person Constructor 
function Person(firstName, LastName, dob) {
  this.firstName = firstName,
  this.LastName = LastName,
  this.birthday = new Date(dob)
 
 // moved this to the prototype
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getFullYear() - 1970) // calculates the DOB 
  // }
}

const john = new Person('John', 'Smith', '8-12-1990');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary); // logs the object

// __proto__ we can see there the prototype, which represents Person.prototype which we can put all the methods that we run against the 

// the nested __proto__ refers to Object.prototype

// since the calculateAge function is the same accross all objects, then move it to the prototupe // We always want to move our methods into the prototype

// PROTOTYPE METHODS

// Calculate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getFullYear(diff) - 1970) // calculates the DOB 
}

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.LastName}`
}


// Gets Married - modify data
Person.prototype.getsMarried = function (newLastName) {
  this.LastName = newLastName;
}

console.log(john.calculateAge()); // can call it on any instance of the objec tthe same way as if it was inside the object. 
console.log(mary.getFullName()); // Mary Johnson

mary.getsMarried('Smith') // invoke the mutation 
console.log(mary.getFullName()); // Mary Smith


// access the object.prototype methods the same way
console.log(mary.hasOwnProperty('firstName')); // true
console.log(mary.hasOwnProperty('getFullName')); // false, cuz its in prototype not object property


