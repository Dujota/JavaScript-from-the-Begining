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
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn')
      guessIpnut = document.querySelector('#guess-input')
      message = document.querySelector('.message');

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max

