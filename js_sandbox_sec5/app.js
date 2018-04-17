// ES6 Inheritance or aka SubClass

// we can create a class and then extend (subclass) 

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}


// syntax is class NewClass extends InheritanceClass, Customer is subclass of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // calls the parent class constructor and we pass in whatever the argumetns that we will inherit from the parent class
    this.phone = phone;
    this.membership = membership;
  }

  // Class Method
  static getMembershipCost (){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard')

console.log(john);  // proto Person, but using the Customer constructor

// since we extended Person we can use the proto methods

console.log(john.greeting());

console.log(Customer.getMembershipCost()); // we can use Person methods on Customer, but not the other way around



