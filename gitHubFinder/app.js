// Search Input

const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input Text
  const userText = e.target.value
  if (userText !== '') {
    console.log(userText);
    
  } 
});