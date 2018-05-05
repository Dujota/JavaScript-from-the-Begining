
// Arrays

//create some arrays

const nums = [43,56,33,23,44,36,5]; // popular implied array
const nums2 = new Array(22,45,33,76,54); // array constructor

const fruits = ['apple', 'bananas', 'orange', 'pear']

// can have any datatype mixed together
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date() ]
console.log(mixed);


let valArray;

// Get array lenght (how many values in array)
valArray = nums.length; // 7

// Check if is array
valArray = Array.isArray(nums);  // true 
// good way to test if something is array like dom node lists 

// Get single value
valArray = nums[3]; // 23, which is the 4th # becuase arrays start at 0

// Insert into Array 
nums[2] = 100; // 100 will be position 2 in array now

//find the index of value
valArray = nums.indexOf(36) // 5 

// Mutating array 

// Add on to end 
nums.push(250); //250 is the last value in array

// Add on to front
nums.unshift(120); // 120 is the first value in array

// Take off from end
nums.pop(); // gets rid of the 250 that was added last

// Take off from the front 
nums.shift(); // drops the 1st postion which is the 120 we just added 

// Splice values
nums.splice(1,3); // [43, 44, 36, 5] .. first argument is where the splice begins and second argument is where it ends, all else remains in the array

// Reverse the Array 
nums.reverse();

// Concatenate Arrays
valArray = nums.concat(nums2); // adds the two arrays together to make one big array

// Sorting arrays
valArray = fruits.sort(); // sorts the contents of the fruits array alphabetical since they are strings

valArray = nums.sort(); //  it sorts based off of the 1st #, in order for us to get a proper sort, we need a callback function

// Use the "compare function" to sort numbers in array

valArray = nums.sort(function (first, second) {
  return first - second
}); // [5, 36, 43, 44] ascending sort for first - second

valArray = nums.sort(function (first, second) {
  return second - first
}); // [5, 36, 43, 44]  descending sort for second - first

// Find 
function under50(num) {
  return num < 50;
};

function over50(num) {
  return num > 50;
};
valArray = nums2.find(under50); // 22
valArray = nums2.find(over50); // 76

console.log(nums2);
console.log(nums);
console.log(valArray);

console.clear();