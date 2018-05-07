const http = new EasyHTTP;

// GET Users

http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// USER DATA
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));