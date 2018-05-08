async function myFunc () {

  // create a new promise insde the async await promise
  const promise = new Promise((resolve, reject) => { // 
    setTimeout(() => resolve('Hello in Timeout'), 1000);
  });

  const response = await promise; // wait until promise is resolved 

  return response // funciton will return promise value 
}

myFunc()
.then(response => console.log(response));

