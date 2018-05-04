document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
 const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'customer.json', true); // this works almost the same as if we were pulling from an api 

  // OnLoad
  xhr.onload = function () {
    if(this.status === 200){
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText) // we do this because this is a jason string so we need to run it through the parse to get an object

      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li> Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `
      document.getElementById('customer').innerHTML = output;
    }
  }

  //Send
  xhr.send();
}
