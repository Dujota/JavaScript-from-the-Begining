// INIT Weather Object
const weather = new Weather('Boston', 'MA');

// INIT UI Object
const ui = new UI();

// Get Weather when DOM Loaded good practice
document.addEventListener('DOMContentLoaded', getWeather);


// weather.changeLocation('Miami', 'FL');

// Moved class function inside anther function so i can call it when the dom is loaded 
function getWeather (arguments) {
  weather.getWeather()
  .then(results => {
    // console.log(results); returns the object
    ui.paint(results);
  })
  .catch(error => console.log(error));

}
