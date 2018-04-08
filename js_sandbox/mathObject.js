// THE MATH OBJECT Methods and Properties
const num1 = 100;
const num2 = 50

let val;

// Simple Math with numbers 
val = num1 + num2; // 150
val = num1 * num2; // 1500
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0 modulus = remainder 

// Math Object -- means it has properties and methods 
val = Math.PI; //PI is a methods  returns pi
val = Math.E; // eulers 
val = Math.round(2.4); // 2

//rounding with Math
val = Math.ceil(2.4); // 3  rounds up 
val = Math.floor(2.4); // 2 rounds down

// square 
val = Math.sqrt(64); // 8

//power of multiplier
val = Math.pow(8, 2); // 64, we write the 1st number then the power exponent second

// absolute
val = Math.abs(-3); // 3 abosulte will always give postive #

// Min & Max 
val = Math.min(2,3,4,1,55,6,3,-2); // returns the smallest # -2 
val = Math.max(2,3,4,1,55,6,3, -2); // returns the largest # 55

// Random # 
val = Math.random(); // gives a random decimal # 

// if you want a random whole number you have to multiply by an integer
val = Math.random() * 20 + 1  // if we dont add + 1 it will generate a random # between 1-19 

// if we want to drop the decimal we have to wrap it in math.floor
val = Math.floor(Math.random() * 20 + 1) // This is very common in Javascript 


console.log(val);

console.clear();