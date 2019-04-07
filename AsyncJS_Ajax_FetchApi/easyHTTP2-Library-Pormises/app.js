const http = new EasyHTTP();

// GET Users

http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// USER DATA
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

// CREATE USER -- will show new user id # 11
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// PUT -- shows user id 2 was updated with post data
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Delete USER
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(error));
