// INIT UI Object
const ui = new UI();

// INIT STORAGE Object
const storage = new Storage();

// Get Stored location Data
const weatherLocation = storage.getLocationData();

// INIT Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// EVENT LISTENERS 
// Get Weather when DOM Loaded good practice
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change the location
  weather.changeLocation(city, state);
  //Set the location in local storage
  storage.setLocationData(city, state);

  // Get & Display Weather with new Location 
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});


// GETS THE WEATHER UPON LOADING
// Moved class function inside anther function so i can call it when the dom is loaded 
function getWeather (arguments) {
  weather.getWeather()
  .then(results => {
    // console.log(results); returns the object
    ui.paint(results);
  })
  .catch(error => console.log(error));
}