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







// EVENT DELAGATION

/*
1.) need event delagation when you have more than one of the same elements that require the same event

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem); <--- would only register the 1st delete item and not the rest

2.) when you insert a new element into the DOM that was not on the page originally but sitll need it to have the event listener. 
*/

// as a result we need to add the event listner to a parent, we can use any parent 

document.addEventListener('click', deleteItem);

function deleteItem(e) {
  /*
  if (e.target.parentElement.className === 'delete-item secondary-content') { //className looks for the whole class string, have to match exactly or wont work
    console.log('delete-item'); 
   } 

   this works but not scalable or efficient cuz if we add a new class name, then it breaks all the selectors
   */


   // better way of doing the same thing. 
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item'); 
    e.target.parentElement.parentElement.remove(); // target = icon, parent = a, gparent=li, remove()
  }
}
