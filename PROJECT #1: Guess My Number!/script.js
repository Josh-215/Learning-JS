"use strict";
/*
//document.querySelector(".class name"); gets the element with a class name
console.log(document.querySelector(".message").textContent);
//.textContent log the class content
document.querySelector(".message").textContent = "correct Number";
// you can change elements contents here too
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".score").textContent);
console.log(document.querySelector(".number").textContent);
//for the element 'input'you ues .value instead of .textContent to get the value
console.log(document.querySelector(".guess").value);
*/
/////

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // this is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
    //when you win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // when you guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER";
      score--;
      document.querySelector(".score").textContent = 0;
    }
    //when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // when you loss the game
      document.querySelector(".message").textContent = "GAME OVER";
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }
});
