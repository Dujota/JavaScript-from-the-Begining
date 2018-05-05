// OBJECT LITERALS

const person1 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }, // within objects we can access its properties
  getBirthYear: function() {
   return 2018 - this.age; // when inside an object, we need to use the this keyword which will pertain to the object itself
  }
};

let valObject;

valObject = person1;

// get a specific value

valObject = person1.firstName // Steve
valObject = person1['firstName']; // same as above but 1st method is preferred. 
valObject = person1.hobbies[1]; // sports
valObject = person1.address; // whole address object
valObject = person1.address.state; // FL
valObject = person1.getBirthYear();


console.log(valObject);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 53}
];

for (let index = 0; index < people.length; index++) {
  console.log(people[index].name); // displays the names of the person for each instance of the loop
}

console.clear();