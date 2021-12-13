'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', startGame);
document.querySelector('.btn').addEventListener('click', restartGame);

const displayContent = function (content) {
  document.querySelector('.message').textContent = content;
};

function startGame() {
  const guess = Number(document.querySelector('.guess').value);
  const scoreDisplay = document.querySelector('.score');
  if (guess == false) {
    displayContent(`⛔ No number!`);
  } else if (guess == secretNumber) {
    displayContent(`🥳 Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(guess > secretNumber ? `📈 Too high!` : `📉Too low!`);
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayContent(`💣 You lost the game!`);
      scoreDisplay.textContent = 0;
    }
  }
}

function restartGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayContent('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}
