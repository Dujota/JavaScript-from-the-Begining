// EVENT BUBBLING AND DELAGATION  
// the bubbling up of events through the DOM, where an event triggered can bubble up to its parent and so on

// event delagation is like the opposite of bubbling, example we can put the listener on the parent element and then use logic inside the event handler to target the actual element you want, could be any parent

// example: listen on the ul for the click event of an li and use logic to target the specific li clicked.

 
// EVENT BUBBLING
// whats going to happen is, when click on card-title, but all the parent functions will called.

/*
commented these to work on event delagation

document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});

*/
const deleteItem = document.querySelector('.delete-item');



// EVENT DELAGATION