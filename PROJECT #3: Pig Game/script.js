"use strict";
// selecing elements
const diceEl = document.querySelector(".dice");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
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
    current0.textContent = currentScore; //change later
  } else {
    //switch player
  }
});
