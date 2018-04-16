// Constructor & the 'this' Keyword


// Person constructor, constructors should start with a Capital, just like classes

// object constructor


function Person(name, age) {
  this.name = name; // we pass in any variable that is being constructed, so when we instansiate the class, we pass in the name as a string to the constructor
  this.age = age

  console.log(this);// the 'this' keyword is ery important, it refers to the current instance of the object, in this case, it would be the person. 
}

const brad = new Person('brad'); // this instantiates a new object, if we omit to a property the default will be undefined
const john = new Person('john', 30); // the name will be john now

console.log(this); // outside of the function (global scope) we will get the window object

console.log(john.age);


