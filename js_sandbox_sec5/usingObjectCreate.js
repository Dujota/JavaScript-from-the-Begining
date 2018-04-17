// Using Object.create()

// crete protoypes inside a parent object and then have different properties iwth diff proto functions

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Thompson');
console.log(mary.greeting());

// Another syntac to do the same as above, rules" the properties need to be a  key: {value: actualValue} where value is a reserved keyword 
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());


