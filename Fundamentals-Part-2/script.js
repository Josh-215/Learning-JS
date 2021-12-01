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
    console.log(`${firstName}   retired`);
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

/////Basic Array Operations (Methods)////

const friends = ["john", "jay", "jojo"];
////adds values
//friends.Puch add a value to the end of an array.
const newLength = friends.push("jaay");
console.log(friends);
console.log(newLength);
//friends.unshift add a value at the start of a array
friends.unshift("jaja");
console.log(friends);

////remove values
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);
console.log(friends.indexOf("jay"));
console.log(friends.indexOf("j")); // -1

friends.push(23);
console.log(friends.includes("jay"));
console.log(friends.includes("j"));
console.log(friends.includes(23));

if (friends.includes("jay")) {
  console.log("you have a friend name jay");
}
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tip[0], +bills[1] + tip[1], +bills[2] + tip[2]];
console.log(bills, tip, totals);
/////////Dot vs. Bracket Notation
const josh = {
  firstName: "Josh",
  lastName: "Urquhart",
  age: 2021 - 1998,
  job: "walmart",
  friends: ["jojo", "john", "jazz"],
};
console.log(josh);
console.log(josh.firstName);
console.log(josh["lastName"]);

const nameKey = "Name";

console.log(josh["first" + "Name"]);
console.log(josh["last" + "Name"]);

// const interestedIn = prompt(
 //   "What do you want to know about Josh? Choose between firstName, lastName, age, job, and friends, "
 // );
 // if (josh[interestedIn]) {
 //   console.log(josh[interestedIn]);
 // } else {
 //   console.log(
 /     "wrong request! Choose between firstName, lastName, age, job, and friends, "
 //   );
 // }
 
 josh.location = "philly";
 console.log(`
 ${josh.firstName} has ${josh.friends.length} friend, and his best friend is called ${josh.friends[0]}.
 `);
 ////// Object Methods
 const josh = {
 firstName: "Josh",
 lastName: "Urquhart",
 birthYear: 1998,
 job: "student",
 friends: ["jojo", "john", "jazz"],
 hasDriversLicense: true,
 
 // calcAge: function (birthYear) {
 //   return 2037 - birthYear;
 // },
 // calcAge: function () {
 //   console.log(this);
 //   return 2037 - this.birthYear;
 // },
 
 calcAge: function () {
   this.age = 2021 - this.birthYear;
   return this.age;
 },
 
 getsummery: function () {
   return `${this.firstName} is a ${this.calcAge()}-year old ${
     josh.job
   } and has ${this.hasDriversLicense ? "a" : "no"} driver license`;
 },
 };
 
 console.log(josh.calcAge());
 
  // console.log(josh["calcAge"](1991));
  console.log(josh.getsummery());
  /////  Coding Challenge #3
  const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    
    calcBML: function () {
      this.BML = this.mass / this.height ** 2;
      return Math.floor(this.BML);
    },
  };
  console.log(Mark.calcBML());
  
  const John = {
    firstName: "john",
    lastName: "smith",
    mass: 92,
    height: 1.95,
    
    calcBML: function () {
      this.BML = this.mass / this.height ** 2;
      return Math.floor(this.BML);
    },
  };
  console.log(John.calcBML());
  
  console.log(
    `${
      Mark.firstName + " " + Mark.lastName
    } BML (${Mark.calcBML()}) is higher then ${
      John.firstName + " " + John.lastName
    } (${John.calcBML()})!`
    );
    ///////
*/
// console.log("lifting weights repetiton 1");
// console.log("lifting weights repetiton 2");
// console.log("lifting weights repetiton 3");
// console.log("lifting weights repetiton 4");
// console.log("lifting weights repetiton 5");
// console.log("lifting weights repetiton 6");
// console.log("lifting weights repetiton 7");
// console.log("lifting weights repetiton 8");
// console.log("lifting weights repetiton 9");
// console.log("lifting weights repetiton 10");

// for loops keep runing while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetiton ${rep}`);
}
const Josh = ["Josh", "good", 2037 - 1991, ["jojo", "john", "jazz"], true];

const type = [];
// console.log(Josh[0])
// console.log(Josh[1])
////and so on

for (let i = 0; i < Josh.length; i++) {
  //reading from the Josh Array
  console.log(Josh[i], typeof Josh[i]);
  // filling types Array
  // type[i] = typeof Josh[i];
  // type.push(typeof Josh[i]);
}
console.log(type);

const year = [1991, 2007, 1969, 2020];
const age = [];

// for (let i = 0; i < year.length; i++) {
//   age.push(2037 - year[i]);
// }
// console.log(age);
//continue and break
console.log("---Only STRING---");
for (let i = 0; i < Josh.length; i++) {
  if (typeof Josh[i] !== "string") continue;
  console.log(Josh[i], typeof Josh[i]);
}
console.log("---BREAK WITH NUMBER");
for (let i = 0; i < Josh.length; i++) {
  if (typeof Josh[i] === "number") break;
  console.log(Josh[i], typeof Josh[i]);
}
