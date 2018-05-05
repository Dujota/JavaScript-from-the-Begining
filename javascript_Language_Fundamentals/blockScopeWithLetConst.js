// VARIABLE SCOPES 

/* 
MOST IMPORTANT THING IS THAT VAR IS A FUNCTION LEVEL SCOPE AND CAN BE OVERWRITTEN BY DECLARING IN A LOOP OR IF 

LET HAVE A BLOCK AND FUNCTION LEVEL SCOPE AND WILL NOT BE RE-ASSIGNED TO GLOBAL VALUE
*/


// GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;



// Function level scope doesnt impact the higher level scope which is global
function scopes() {
  var a = 4
  let b = 5
  const c = 6
  console.log('Function Scope: ', a, b, c);
}
// scopes();

// Block Scope = if statements and loops & anything wrapped in { }

// let and const will not allow a block scope to overwrite the global scope value. Var will allow the variable to be overwritten from within the block unlike the function scope


//IF BLOCK SCOPE
if (true) {
  var a = 7 // will overwrite the var a =1 in global scope
  let b = 8
  const c = 9
  console.log('Block (IF) Scope: ', a, b, c);
}

// For Loop Block Scope

for (let a = 0; a < 10; a++) {  // we use let isntead of var so it does not change the value in the global sope
  console.log(`Loop ${a} : Block Scope`);
}


console.log('Global Scope', a, b, c);