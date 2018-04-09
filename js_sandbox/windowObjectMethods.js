// WINDOW METHODS  / OBJECTS / PROPERTIES

// Alert
// alert('helloWorld')


// Prompt, similar to alert, but it takes an input

/*
 const input = prompt();

alert(input); //  an alert pops up with a text box
*/

//  Confirm - used often when you are deleting somehting to make sure they intend to do as they want

/*
if (confirm('Are you sure')) {  // pops up ok/cancel = true/false 
  console.log('Yes'); // executes when you hit ok
} else {
  console.log('No'); // executes when you hit cancel
}
*/

//PROPERTIES OF WINDOW

let val3;

// Outter Height and Width -- OUTER measures from the outside borders of the window
val3 = window.outerHeight; // outputs the height of the document in px as per the screen size 
val3 = window.outerWidth // outputs the width in px and dynamic as window size changes

// Inner Height & Width -- Measures from inside the window, so a scroll bar would impact the inner measurement. 

val3 = window.innerHeight; // doesnt count somehting like the chrome tools in the measurement
val3 = window.innerWidth;

// Scroll Points 
val3 = window.scrollY; // outputs the value in pixels of how far down we have scrolled, where 0 = top of the window 

val3 = window.scrollX; // outputs the value of horizontal scroll just like vertical scroll 

// These work really well for anything that requires an animation or depends on a specific spot of the page to be visible before executing a function

// LOCATION Object\
val3 = window.location // displays the whole object has a much of methods/properties
// accessing some of these methdos/properties
val3 = window.location.hostname;
val3 = window.location.port;
val3 = window.location.href; // protocal hostname and port
val3 = window.location.search; // gives anything in the header which is passed as the query string 

// REDIRECT
/*
window.location.href = 'http://www.google.com' // creates a redirect, usually used for internal redirection but can be set to anything

*/

// Reload
/*
window.location.reload();
*/

// History Object
/*
window.history.go(); checks the history of the browser and redirects to that page, depending on the postion selected inside the go(#) -ve # goes back in history +ve # goes forward in history of browser
*/

val3 = window.history.length //  checks the length of the history


// Nanivator Object -- has to do with the actual browser itself, chrome firefox etc. named after old netscape browser

val3 = window.navigator;  // geoloaction is part of navigation object
val3 = window.navigator.appName; // always says Netscape unless on IE
val3 = window.navigator.appVersion; 
val3 = window.navigator.userAgent;
val3 = window.navigator.platform; // gives the OS that user is running
val3 = window.navigator.vendor; // the maker of browser
val3 = window.navigator.language;

console.log(val3);
