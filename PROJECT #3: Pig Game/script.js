"use strict";
// selecing elements
const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
//Statring conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");
//rolling  dice function
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dices
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //check for 1 if true go to next player
  if (dice !== 1) {
    //add dice to score
    //currentScore = currentScore + dice;
    currentScore += dice; // short hand
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerEl0.classList.toggle("player--active");
    playerEl1.classList.toggle("player--active");
  }
});
