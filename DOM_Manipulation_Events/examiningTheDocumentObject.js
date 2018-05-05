// EXAMINING THE DOCUMENT OBJECT

let val;

val = document // gives the document including the markup 

val = document.all; // gives us an array like object of the document
val = document.all[1]; // just like array we can access its values
val = document.all.length; // counts all the elements in the dom
val = document.head; // acces only the head
val = document.body; // access only the body
val = document.doctype;
val = document.domain; 
val = document.URL; // the whole url
val = document.contentType;

// selecting elements without selectors ** not recomended but can be done ***

val = document.forms;
val = document.forms[0]; // can access the form once we know which one it is 
val = document.forms[0].id; // shows the id 
val = document.forms[0].method; // shows get or post
val = document.forms[0].action; 

// can do this on links

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images; // can acces images

val = document.scripts; // access scripts
val = document.scripts[2].getAttribute('src'); // gets the specifics of the html tags

//can turn a dom collection to an array so we can use array methods into it

let scripts = document.scripts; // pull the node list from the document

let scriptsArray = Array.from(scripts); // convert it to an array 

scriptsArray.forEach(script => { // we can now use the for each loop on the collection
  console.log(`This is the Script tag itself ${script}`); // loops through the node list and gives us each script tag
  console.log(`this is the src attr ${script.getAttribute('src')}`);
  console.log('--------------------------');
   
});


console.log(val);
console.clear();