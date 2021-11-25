"use strict";
/*
///Functions
function logger() {
  console.log("my name is jay");
}
// calling/running/invoking, a function
logger();
function fruitProcessor(apples, bananas) {
  const juice = `Juice with ${apples} apples and ${bananas} bananas`;
  return juice;
}

const applejuice = fruitProcessor(5, 2);
console.log(applejuice);

const applejuices = fruitProcessor(6, 9);
console.log(applejuices);
const num = Number("23");

///////
////Function Declarations vs. Expressions
//this a Function Declarations
//we can call a Declarations before evan defining them
// This is optional
const age1 = calcAge1(1991); //being called first

function calcAge1(birthYear) {
  // now defind
  return 2037 - birthYear;
}
console.log(age1);
////
//Function Expressions
// cant be called first need to be diefind than called
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
////////////
*/
/////
///Arrow Functions

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

const yearsOfRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsOfRetirement(1991, "jay"));
console.log(yearsOfRetirement(1980, "bob"));
