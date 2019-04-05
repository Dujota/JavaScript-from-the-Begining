// Single Customer
document.getElementById('button1').addEventListener('click', loadCustomer);

// Array of customers
document.getElementById('button2').addEventListener('click', loadCustomers);

// METHODS---------------

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'customer.json', true); // this works almost the same as if we were pulling from an api

  // OnLoad
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText); // we do this because this is a jason string so we need to run it through the parse to get an object

      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li> Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  };

  // Send
  xhr.send();
}

// Load Array of  Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'customers.json', true); // this works almost the same as if we were pulling from an api

  // OnLoad
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText); // we do this because this is a jason string so we need to run it through the parse to get an object

      let output = ''; //  set empty variable outside loop with let since we will mutate the value and then we append += each iteration to the output variable so that they all save, otherwise it will overide without the +=
      customers.forEach(function(customer) {
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li> Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  };

  // Send
  xhr.send();
}
