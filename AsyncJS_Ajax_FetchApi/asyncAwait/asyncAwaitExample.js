async function myFunc () {

  // create a new promise insde the async await promise
  const promise = new Promise((resolve, reject) => { // 
    setTimeout(() => resolve('Hello in Timeout'), 1000);
  });

  const error = true // fabricating an error
  if (!error) {
    const response = await promise; // wait until promise is resolved 

    return response // funciton will return promise value   
  } else {
    await Promise.reject(new Error('Something went wrong!')) // we have to use the class method as we are outside the promise and then call reject method, which will then need an error message passed into it
  }
  
}

myFunc()
.then(response => console.log(response))
.catch(error => console.log(error));