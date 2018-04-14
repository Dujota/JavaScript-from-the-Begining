// LOCAL AND SESSION STORAGE
 
/*
local storage is part of the window (type window in console)

set key alue pairs, the value must be a string, can save arrays and objects, but must convert them into a string using JSON.stringify and when you pull the data to use it, you need to use JSON.parse
*/

//difference between local vs session , local will stay until its manually cleared while session is destroyed when browser is closed, but the api is eactly the same


/*

// set local storage item

localStorage.setItem('name', 'John'); // localStorage.setItem('key', 'value');  can check in inspect/application/storage
localStorage.setItem('age', '30');

// set session storage item
sessionStorage.setItem('name', 'Beth');

// remove from storage

// localStorage.removeItem('name');


// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();


console.log(name, age);

*/
