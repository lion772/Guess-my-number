'use strict';

//Use .ceil to round up to a whole number
let randomNumber = Math.ceil(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function () {
  //The value returned from the input is a string that must be converted to a number.
  //If there's no value in it, it returns a falsy value '0'.
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);

  // When there is no input
  if (score > 1) {
    if (guess <= 0) {
      document.querySelector('.message').textContent =
        '⛔️ Try to guess a number between 1 and 20';
    } else {
      // When there is input
      if (guess === randomNumber) {
        document.querySelector('.message').textContent =
          '🎉 You found the correct number!';
        document.body.style.backgroundColor = '#60B347';
        document.querySelector('.interrogation').textContent = String(guess);
        document.querySelector('.highscore').textContent = score;
      } else {
        if (
          (guess >= randomNumber - 3 && guess < randomNumber) ||
          (guess <= randomNumber + 3 && guess > randomNumber)
        ) {
          document.querySelector('.message').textContent = 'Almost there...';
          score -= 1;
        } else if (guess < randomNumber) {
          document.querySelector('.message').textContent = 'Too low';
          score -= 1;
        } else {
          document.querySelector('.message').textContent = 'Too high';
          score -= 1;
        }
        document.querySelector('.score').textContent = score;
      }
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'You lost the game... 😢';
    document.body.style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 20);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.interrogation').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 3;
  document.querySelector('.highscore').textContent = 0;
});
