// Init GitHub Class
const github = new GitHub;

// Init UI Class
const ui = new UI;


// Search Input

const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input Text
  const userText = e.target.value
  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText)
    .then (data => { // do an if statement to check for the error message that shows up when the user is not found
      if (data.profile.message === 'Not Found') {
        // Show Alert that the user is not found
        ui.showAlert('User is not found', 'alert alert-danger')
      } else {
        // Show the profile      
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
    
  } else { // if the input field is empty then clear the UI
    ui.clearProfile();
  } 
});