/*
GAME FUNCTION/RULES:

- Player msut guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/


//Variables

// Game Values

let min = 1, // shorthand to declare multiple let variables
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements    
const game = document.querySelector('#game'), // the whole container
      minNum = document.querySelector('.min-num'), // 1st span
      maxNum = document.querySelector('.max-num'), // 2nd span
      guessBtn = document.querySelector('#guess-btn') // submit button
      guessIpnut = document.querySelector('#guess-input') // the # user types
      message = document.querySelector('.message'); // where we will append any message from our game

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max

// Event Listener for Guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessIpnut.value); // we need to convert to in since the value is coming as a string

  // Validate
  if (isNaN(guess) || guess < min || guess > max) { // check if it is not a number or less than or greater than min/max
    setMessage(`Please enter a number between ${min} and ${max}`, 'red') // if not the correct # display this msg, we also pass in the color that we need to the callback function as it will accept a string to set the color of the msg
  }

  // Check if won
  if (guess === winningNum) {
    // Game Over, Won! 

    gameOver(true, `${winningNum} is Correct! You Win!!!`)

  } else {
    // Wrong number
    guessesLeft -= 1; //shorthand
    
    // Check to see if any guess left
    if (guessesLeft === 0) {
      // Game over, Lost!
      
      gameOver(false, `Game Over, You Lost! The correct number was ${winningNum}`)

    } else {
      // Game Continues, Answer Wrong!

      // Change border color
      guessIpnut.style.borderColor = 'red';

      // Clear the Input
      guessIpnut.value = '';
      
      // Tell the user it is a wrong number
      setMessage(`${guess} is not correct. Try again. You have ${guessesLeft} guesses left`, 'red')
    }

  }

  console.log(guess);
});

// Game Over

function gameOver(won, msg) {

  let color;
  won === true ? color = 'green' : color = 'red';

   // Disable Input
   guessIpnut.disabled = true;

   // Change border color
   guessIpnut.style.borderColor = color;

   // Set message to won
   setMessage(msg, color )
}

// Set Message Callback
function setMessage(msg, color) { // accepts a string for the message and a color for style 
  message.style.color = color
  message.textContent = msg
}