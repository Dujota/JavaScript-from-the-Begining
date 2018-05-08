// Init
const github = new GitHub;


// Search Input

const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input Text
  const userText = e.target.value
  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText)
    .then (data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert that the user is not found
      } else {
        // Show the profile

      }
      
    })
    
  } else {
    // Clear the profile
  } 
});