// Listen for submit

document.querySelector('#loan-form').addEventListener('submit', function (e) {
  // Hide Results
  document.getElementById('results').style.display = 'none'; // set up so that when the results finally show and they hit calculate again, we want to hide the old results
  
  //Show Loader
  document.getElementById('loading').style.display = 'block';

  // Display Results after 2 seconds
  setTimeout(calculateResults, 2000); // run the calculate results function after 2 seconds, but we have to set the results style to display = block in the callback function

  e.preventDefault(); // removed the callback and commented the prevent default in calculate results, we will now prevent the submit on the event listener, also replaced the callback with regular function


});

function calculateResults() {
  console.log('Calculting....'); // test out the stop default
  
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Calculations stored in Variables
  const principal = parseFloat(amount.value); // parsing the value of amount field into a float
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x - 1)

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); // sets the # have a fixed # of decimals
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';
  
    //Hide the Loader
    document.getElementById('loading').style.display = 'none';

  } else { // condition if inputs were wrong/missing
    showError('Please check your numbers'); // we will use this function to create a div that will display the error messages on a page
    
  }
//  e.preventDefault();
}

// Show Error Function

function showError(error) {
  // Hide Results
  document.getElementById('results').style.display = 'none';

  //Hide the Loader
  document.getElementById('loading').style.display = 'none';

  //create a div
  const errorDiv = document.createElement('div');

  // Get elements - card (parent div) and heading 
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class to new div
  errorDiv.className = 'alert alert-danger'; // bootstrap class

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error)); // we will append he error messae from the callback in the if statement

  // Insert error above the heading, we do that by grabbing the parent(card) and call insertBefore();
  // it works by calling insertBefore() on a parent, and you pass in (element to put in, element to insert before from) 
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds 
  setTimeout(clearError, 3000); // takes two parameters, one is function and next is time in miliseconds
}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}

