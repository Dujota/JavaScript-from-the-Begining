// Listen for submit

document.querySelector('#loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
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
  } else {
    console.log('Please check your numbers');
    
  }
 e.preventDefault();
}

