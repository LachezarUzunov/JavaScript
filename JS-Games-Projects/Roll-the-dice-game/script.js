'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceImgEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceImgEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function changePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  // it adds a class if it not there and it wil remove it if it is there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rollding dice functionality
btnRoll.addEventListener('click', onDiceRoll);

function onDiceRoll(event) {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImgEl.classList.remove('hidden');
    diceImgEl.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
}

btnHold.addEventListener('click', holdResult);

function holdResult(event) {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImgEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`. player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
}

btnNew.addEventListener('click', onNewGame);

function onNewGame(event) {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
  diceImgEl.classList.remove('hidden');

  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
}
