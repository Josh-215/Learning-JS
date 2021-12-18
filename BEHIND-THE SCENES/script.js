"use strict";
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${fristName} you are ${age}, born is ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const fristName = "jey";

      //resetting outer scopes
      output = "new output!";

      var millenial = true;
      const str = `oh, and you're a millenial, ${fristName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str)
    console.log(millenial);
    // console.log(add(2, 4));
  }
  printAge();
  return age;
}

const fristName = "josh";
calcAge(1991);
