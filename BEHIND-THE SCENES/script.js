"use strict";
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    const output = `${fristName} you are ${age}, born is ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const fristName = "josh";
calcAge(1998);
