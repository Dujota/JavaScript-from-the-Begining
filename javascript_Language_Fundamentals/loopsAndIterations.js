// General Loops and Iterations

// FOR LOOP

//for loop needs a counter, then a condition and then an increment to meet the condition set, index ++ = index = index + 1

// how to break out of the loop or skip the iteration or do something else, this applies to any kind of loop
for (let index = 0; index < 10; index++) {
  if (index === 2) {
    console.log('2 is my favorite number');
    continue; // basically makes the loop stop and go on to the next iteration. 
  }

  if (index === 5) {
    console.log('stop the loop here');
    
    break; // this will terminate the loop upon execution
  }
  console.log(` The Number ${index}`); // loop does both the if and this console log
}

console.clear();
// general rule # use a for loop when you know how many times it will run and use a while loop when it is unclear.

// While Loop

// first we set up the variable outside the loop

let i = 0;

while (i < 10) {
  console.log(`while number ${i}`);
  i++; //  must do increment inside the loop
}

console.clear();

// DO WHILE


let ii = 0;
//regardless wether the condition of the while is met or not, it ill always run the do { logic } at least once 
do {
  console.log(`do while number ${ii}`);
  ii++; 
}

while (ii < 10);

console.clear();


//LOOP THROUGH ARRAY USING FOR 

const cars = ['ford', 'chevy', 'honda', 'toyota']

// works the same for a while loop where we use the lenght of the array instead of a fixed number in the loop condition
for(i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// LOOP THROUGH ARRAYS USING FOREACH -- PREFERRED!!!!!
// can take three inputs, 1.) iterator, 2.) index, 3.)the actual array

cars.forEach(function (car, index, array) {
  
  console.log(`${index} : ${car}`); //  have access to index and the actual car 
  
  console.log(array); // have access to the whole array 
});

console.clear();

// MAP METHOD - works in a few ways, used to return a different array with the same # of items as the original input array

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
]

// lets try to create an array of Ids for these users. 

const ids = users.map(function (user) {
  return user.id
})

console.log(ids);;

console.clear();


// For In loop -- often used for objects
const user =  {
  firstName: 'John',
  lastName: 'Smith',
  age: 40
}

// x will be the key and if we want to access the value for a key we access the object[key]
for(let x in user){
  console.log(`${x} : ${user[x]}`); // logs the key value pairs, we get the value with user[x]  
}

console.clear();