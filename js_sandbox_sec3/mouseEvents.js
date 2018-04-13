// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');



// Click
clearBtn.addEventListener('click', runEvent); // when clearbtn clicked fire the callback function

// Double Click event 
clearBtn.addEventListener('dblclick', runEvent);

// MouseDown
clearBtn.addEventListener('mousedown', runEvent); // triggered with click, then hold the mouse button

// Mouseup 
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
card.addEventListener('mouseenter', runEvent); // only fires on the initial parent elements

// Mouse Leave
card.addEventListener('mouseleave', runEvent);  // only fires on the initial parent elements

// Mouseoer
card.addEventListener('mouseover', runEvent); // similar to mouseenter but on fires on the children elements

// Mouseout
card.addEventListener('mouseout', runEvent); // similar to mouseleave 

// Mousemove
card.addEventListener('mousemove', runEvent); // fires if the mouse moves anywhere inside the element selected, really useful for interactive components


// Event Handler
function runEvent(e) { // callback function for event
  // console.log(`EVENT TYPE: ${e.type}`);
  
  heading.textContent = `MouseX: ${e.offsetX} MouseY : ${e.offsetY}`; // takes the mouse event, paired with the cursor coordinate and can display them anywhere in this case replace the heading with the two coordinates

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; // can take the coordinates and pass it to anything that can accept the value in this case the rgb for background color and it is now linked to the mouse event
  
}