'use strict';
/*
console.log(document.querySelector('.message').textContent);
// the query selector is a method on the object document
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
//handling the click of a button
*/

// adding event listner method, we need to add the type of the event
// we also need to specify the reaction to the click event, we do this by
// adding a function with a code that is excecuted whenever the click event
// happens on the check button. And that function is the event handler,
// addEventListener method is a special kind of function as a second
// argument it expects the event handler function, so after click we need
// to pass in function argument (function is just a value after all and if
// is just a value we can pass it into another function as an argument,
// just like any other value - string or number)
// the function will only be called as soon as the event happens and
// it is JS behind the scenes JS engine that calls the function, the
// function is only called if the event happens.
// Math.random always gives a random number between 0 and 1; This way
// with math.random we always get number between 1 and 19 and we add 1
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secrectNumber) {
    // when player wins
    document.querySelector('.message').textContent = '🥳 Correct number!';
    document.querySelector('.number').textContent = secrectNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // use style property, then the style itself and if two words write in one
    // word with capital as in JS and the new value is always a string
    // when guess is too high

    //when guess is wrong
  } else if (guess !== secrectNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secrectNumber ? '👆 Too high!' : '👇 Too low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💣 You lost the game';
        document.querySelector('.score').textContent = 0;
      };
    
    /*
  } else if (guess > secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    
    // when guess is too low
  } else if (guess < secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
}); */

// his solution
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/*document.querySelector('.again').addEventListener('click', function () {
  //secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
*/
// With DOM we can also change CSS
