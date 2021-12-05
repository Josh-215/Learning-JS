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
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }
});
