"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${fristName} you are ${age}, born in ${birthYear} `;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //crateing new variable with same name as outer scope
//       const fristName = "jay";
//       var millenial = true;
//       //reasssinging outer scopes variable
//       output = "new output";

//       const str = `oh, and your a millenial, ${fristName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial); // var is a function scope so it s ignore the block
//     // add(1, 2); Errer: its out of its scope
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// //global scope
// //console.log(age) = Error: cant be called the variable was crated in a function scope
// const fristName = "josh";
// calcAge(1991);
// ///////

// console.log(josh.calcAge());
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAge(1998);

// // the THIS dose not work in an arrow function
// const calcAgeArrow = (birthYear) => {
//   console.log(2027 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1998);

// const josh = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };
// josh.calcAge();

// const jay = {
//   year: 1997,
// };

// jay.calcAge = josh.calcAge;
// jay.calcAge();

// const f = josh.calcAge;
// f();
/////////
// Regular Functions vs. Arrow Functions
// const josh = {
//   fristName: "Josh",
//   year: 1998,
//   calcAge: function () {
//     console.log(2021 - this.year);
//     //Solution one
//     // const self = this;
//     // const ismillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // console.log(this.year >= 1981 && this.year <= 1996);
//     //};
//     //Solution two

//     const ismillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     ismillenial();
//   },
//   great: () => console.log(`hey ${this.fristName}`),
// };
// josh.great();
// josh.calcAge();

// //argument keyWords
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 4);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 4, 6);
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Josh",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log("friend", me);
console.log("me", me);
