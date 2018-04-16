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
guessBtn.addEventListener('click', function (e) {
  let guess = parseInt(guessIpnut.value); // we need to convert to in since the value is coming as a string

  // Validate
  if (guess === NaN || guess < min || guess > max) { // check if it is not a number or less than or greater than min/max
    setMessage(`Please enter a number between ${min} and ${max}`) // if not the correct # display this
  }
  console.log(guess);
});
