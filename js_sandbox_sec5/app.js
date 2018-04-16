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
  this.birthday = dob,
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970) // calculates the DOB 
  }
}

const john = new Person('John', 'Smith', '812-1990');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);


