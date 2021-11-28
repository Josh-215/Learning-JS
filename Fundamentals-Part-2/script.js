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
/////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePiecs = cutFruitPieces(apples);
  const orangePiecs = cutFruitPieces(oranges);
  const juice = `Juice with ${applePiecs} Pieces apples and ${orangePiecs} pieces oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsOfRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has retired`);
    return -1;
  }
};
console.log(yearsOfRetirement(1991, "jay"));
console.log(yearsOfRetirement(1970, "key"));
//////Coding Challenge #1
// Dlophins, koalas;

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 72));

let scoreDolphins = calcAverage(44, 23, 71);
let scorekoalas = calcAverage(65, 54, 49);
console.log(scorekoalas, scoreDolphins);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`no one wins`);
  }
};
// checkWinner(scoreDolphins, scorekoalas);
checkWinner(579, 111);
//test 2
scoreDolphins = calcAverage(85, 54, 41);
scorekoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scorekoalas);
checkWinner(scoreDolphins, scorekoalas);
*/
////Introduction to Arrays

const friend1 = "john";
const friend2 = "jay";
const friend3 = "jojo";
const friends = ["john", "jay", "jojo"];
console.log(friends);
const y = new Array(1991, 1985, 2000, 2890);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// you can cheage one name form the array even when using a const
friends[2] = "joy";
console.log(friends);
//but not the whole array
//friends = ["a", "b", "c"]; this bad
const firstName = "Josh";
const josh = [firstName, "king", 2021 - 1998, friends];
console.log(josh);

//test
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
//this wont work the argument is expecting a single value
//years is a array of valus.
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
