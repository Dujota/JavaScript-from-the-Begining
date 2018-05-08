// normally we would use the .then() syntax but with async await we dont need to

async function getUsers () {

  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); 

  // We only proceed once the call is resolved
  const data = await response.json();

  // Only proceed once the second promise is resolved
  return data;
}

// now we call the .then on the promise made by the async function
getUsers()
  .then(users => console.log(users));