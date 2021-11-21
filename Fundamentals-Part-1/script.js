//values and variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("josh");
// when ever i have multipe word for a variable use
// camelCase: lowercase for the first word and uppercase for the rest.

Exp
let first = "Josh";
let firstNameParson = "Josh";

// This is OK
let jonas_matilda = "JM";
console.log(jonas_matilda);
//but this is standard
let firstName = "Josh";
console.log(firstName);

//its best to have a more descriptive variable
let myFirstJob = "walmart";
let myCurrentJob = "programmer";
// then this
let job1 = "walmart";
let job2 = "programmer";

//data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof false); //is a boolean
console.log(typeof javascriptIsFun); //is a boolean
console.log(typeof 32); // is  a number
console.log(typeof "hi"); //is a string

///////////////////
javaceiptIsFUn was a boolean but now it a 
string because we declare a 'string' and 
not a true or false.
///////////////////
javascriptIsFun = "yes";
console.log(typeof javascriptIsFun); //string

let, const, var 
let year;
console.log(typeof year); //undfined
year = 1998;
console.log(typeof year); // number
// let,const,var
//let: is use for when the value is going to change.
let age = 30;
age = 32;
//const: the values cannot be change using a const.
const birthYear = 1991;
// birthYear = 1990; //will be a typeError
//const must have a value, cannot be empty
// const job;
//var:is the old way just the same as let.
var job = "programmer";
job = "student";

//// Basic Operator
//math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3: means 2 to the power of 3 = 2 * 2 * 2;
// ** = power of

const firstName = "Jonas";
const lastName = "something";
console.log(firstName + " " + lastName);

// assignment operator
let x = 5 + 10; //x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // adding 1
x--; // subtracting 1
x--; // subtracting 1
console.log(x);

// comperison operator
// >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; //
console.log(averageAge, ageJonas, ageSarah);
///Coding Challenge #1
const marksMass = 78;
const marksHeigth = 1.69;
const johnMass = 92;
const johnHeigth = 1.95;

// const marksMass = 95;
// const marksHeigth = 1.88;
// const johnMass = 85;
// const johnHeigth = 1.76;
const BMIMark = marksMass / marksHeigth ** 2;
console.log(BMIMark);
const BMIJohn = johnMass / johnHeigth ** 2;
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
//the old way
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// the new way
const newJonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newJonas);

//The \n make a new string line for JS
console.log("string with \n multiple \n lines");
// this is the new way of using multipe string line buy using
//return and the back (tick===``)
console.log(`string with
multipe 
line`);
