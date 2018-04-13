// EVENT LISTENERS & THE EVENT OBJECT

// first select the element and then add an event listener . addEventListener takes two things ('event', function () {})

/*

document.querySelector('.clear-tasks').addEventListener('click', function(event) {
  
  console.log('hello world'); // code in here fires when the event happens
  
  event.preventDefault(); // the clear tasks button has a href = '' which reloads page, so we use preventDefault to stop that, alternatively for this particular case, we can just add a # to the href and it will not reload pages
});

*/


// we an also pass it a named function like onClick , much neater than the previous example and the preferred way 
document.querySelector('.clear-tasks').addEventListener('click', onClick);

// when that event happens, it will look for a function called onClick
function onClick(event) {
  // console.log('logged Clicked'); 

  let val;

  val = event // save the event into a variable, in this case the mouseEvent
  // we can log it and check the attributes, including the postion, if with shift but most importantly is will show the TARGET!

  // Event target element
  val = event.target // shows the event's target, the whole element which we can then acces its porperties
  val = event.target.id // shows any id the target has
  val = event.target.className // shows any class names target may have
  val = event.target.classList; // same as class name but with a list 

  // can do element modifiers on the target event
  event.target.innerText = 'Changed with a click event';

  // EVENT TYPE
  val = event.type // shows the type of event that is targeted

  // Timestamp
  val = event.timeStamp; // displays the timestamp in secods 

  // Coordinates of the event relative to the window. 
  val = event.clientY; //  the # it gives is the # of pixels from the top of the window 
  val = event.clientX; // same as above but on the x axis 
  

  // Coordinates of the event relative to the element itself 
  val = event.offsetY; // the # will give the # of pixels from the top of the element itself
  val = event.offsetX; // same as above but on the x axis 

  console.log(val); 
  
} 