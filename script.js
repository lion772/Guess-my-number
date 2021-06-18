'use strict';

let randomNumber = Math.floor(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }

  if (guess === randomNumber) {
    document.querySelector('.message').textContent =
      '🎉 You found the correct number!';
    document.body.style.backgroundColor = 'green';
  } else {
    if (guess >= randomNumber - 3 && guess < randomNumber) {
      document.querySelector('.message').textContent = 'Almost there...';
    } else if (guess <= randomNumber + 3 && guess > randomNumber) {
      document.querySelector('.message').textContent = 'Almost there...';
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = 'Too low';
    } else {
      document.querySelector('.message').textContent = 'Too high';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 6);
});
