// INIT Weather Object
const weather = new Weather('Boston', 'MA');

// INIT UI Object
const ui = new UI();


// EVENT LISTENERS

// Get Weather when DOM Loaded good practice
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  // Get & Display Weather with new Location 
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});



// Moved class function inside anther function so i can call it when the dom is loaded 
function getWeather (arguments) {
  weather.getWeather()
  .then(results => {
    // console.log(results); returns the object
    ui.paint(results);
  })
  .catch(error => console.log(error));

}
