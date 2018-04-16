// Constructor & the 'this' Keyword


// Person constructor, constructors should start with a Capital, just like classes

// object constructor, the 'this' keyword is very important, it refers to the current instance of the object, in this case, it would be the person. 

function Person(name, dob) {// we pass in any variable that is being constructed, so when we instansiate the class, we pass in the name as a string to the constructor
  
  this.name = name;  
  // this.age = age
  this.birthday = new Date(dob); // can use constructors inside object
  this.calculateAge = function () { // can put functions inside objects
    const diff = Date.now() - this.birthday.getTime(); // can access any property inside using this.property and we getTime in milliseconds since 1970(JS)
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); // common formula for calculating age from a birthday 
  }
}

/*

const brad = new Person('brad'); // this instantiates a new object, if we omit to a property the default will be undefined

const john = new Person('john', 30); // the name will be john now

console.log(this); // outside of the function (global scope) we will get the window object
console.log(john.age); // 30

*/

const brad = new Person('Brad', '9-10-1981');
console.log(brad);
console.log(brad.calculateAge());




