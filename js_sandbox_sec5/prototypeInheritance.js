// Prototypal Inheritance

// Person Constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting 
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor, that will inherit from Person using Object.call(this, property, property ...)

function Customer (firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // funciton that allows us to call another function within the current context
  this.phone = phone
  this.membership = membership
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);  // with this we can use methods from Person

// Make Customer prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customr

const customer1 = new Customer('Tom', 'Smith', '416-456-2235', 'Standard');

console.log(customer1); // displays the above object

// Customer Greeting - overwrite the greeting
Customer.prototype.greeting = function (){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greeting()); // we get error unless we inherit the prototypes as well as properties

// therefore any prototype that is written on the Person object can now be used by the Customer



