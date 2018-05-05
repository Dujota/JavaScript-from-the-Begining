//ES6 Classes

// ES6 constructor
class Person { // create a class exactlty the same way
  constructor(firstNane, LastName, dob){
    this.firstNane = firstNane;
    this.LastName = LastName;
    this.birthday = new Date(dob)
  }

  greeting(){ // any mehtod we add to class gets added to the prototype
    return `Hello there ${this.firstNane} ${this.LastName}` 
  }

  calculateAge () {
    const diff = Date.now() - this.birthday.getTime(); // gets the difference between today and bday in milliseconds
    const ageDate = new Date(diff); // converts milliseconds to UTC Date
    return Math.abs(ageDate.getUTCFullYear() - 1970); //  pull only the year and subtract it from 1970 which is a JS Thing
  }

  getsMarried (newLastName) {
    this.LastName = newLastName;
  }

  // add a static method that can be used without creating an object from the class, we can call it, but have to say static in the front of it

  static addNumbers(x, y){
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getsMarried('Thompson')
console.log(mary.greeting());

console.log(Person.addNumbers(1,1)); // static methods are class methods and as such do not need to use instance name
