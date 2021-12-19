"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${fristName} you are ${age}, born in ${birthYear} `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //crateing new variable with same name as outer scope
      const fristName = "jay";
      var millenial = true;
      //reasssinging outer scopes variable
      output = "new output";

      const str = `oh, and your a millenial, ${fristName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // var is a function scope so it s ignore the block
    // add(1, 2); Errer: its out of its scope
    console.log(output);
  }
  printAge();

  return age;
}

//global scope
//console.log(age) = Error: cant be called the variable was crated in a function scope
const fristName = "josh";
calcAge(1991);
///////
