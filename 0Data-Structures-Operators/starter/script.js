// "use strict";

// // Data needed for a later exercise
// //const flights =
// // "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     startIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     adderss,
//   }) {
//     console.log(
//       `order received!${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adderss} at ${time} `
//     );
//   },
// };
// const arr = [4, 5, 6];
// // the bad way of doing this
// const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// // The Spread Operator (...)good way
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// const newMenu = [...restaurant.mainMenu, "cookeis"];
// console.log(newMenu);
// //create copys
// const mainMenu = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
///////
// restaurant.orderDelivery({
//   tim: "20:30",
//   adderss: "via del Sole, 21",
//   mainIndex: 2,
//   startIndex: 2,
// });
// restaurant.orderDelivery({
//   adderss: "via del Sole, 21",
//   startIndex: 1,
// });commit

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: tags } = restaurant;
// //default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);
// /// Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(open, close);

/////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x = 1, y = 1, z = 1, h = 1] = arr;
// console.log(x, y, z, h);
// console.log(arr);
// ////////////////////

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// /////////////////////////////
// // resceive 2 return value from a function
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);

// const nested = [2, 3, [1, 4]];
// // const [j, , i] = nested;
// const [j, , [k, l]] = nested;
// console.log(j, k, l);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// let namee = "josh ";
// let dayOfBirth = 1998;
// let namee = "josh";

// let number = prompt("whats your favorite number");

// if (number >= 1000) {
//   console.log("woah that a BIG BIG number");
// } else if (number >= 100) {
//   console.log("that a big number");
// } else if (number >= 0) {
//   console.log("nice number");
// } else {
//   console.log("WHAT! a negative number that crazy");
// }
// let feeling = prompt("how you feelimg today");

// switch (feeling) {
//   case "happy":
//     console.log("thats Awsome, im feeling happy too");
//     break;
//   case "sad":
//     console.log("That's too bad, I hope you feel better soon.");
//     break;
//   case "hunger":
//     console.log("ME too lets go get some pizza to eat");
//     break;
//   default:
//     console.log("i see sorry you feel that way");
// }

// let num = prompt("Please enter a whole number");
// let messade;

// if (num % 2 === 0) {
//   message = "That is an even number!";
// } else {
//   message = "That is an odd number!";
// }
// console.log("You typed", message);

// let num = prompt("Please enter a whole number");
// let message;

// if (num % 2 === 0) {
//   message = "That is an even number!";
// } else {
//   message = "That is an odd number!";
// }
/////////////////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//   if (Math.random() > 0.5) {
//     console.log("Breaking out of the loop when i is " + i);
//     break;
//   } else {
//     console.log(i);
//   }
// }
/////////
// console.log("The message is:", message);
// for (let i = 0; i < 5; i++) {
//   if (Math.random() > 0.5) {
//     console.log("Skipping the console.log when i is " + i);
//     continue;
//   }
//   console.log(i);
// }

// let people = ["Greg", "Mary", "Devon", "James"];
// people.splice(2, 1, "Elizabeth", "Artie");
//people.indexOf("foo")//9
// people.indexOf("Mary")//8
// people.slice(1);
//for (people of people) {//6
//   if (people === "James") {
//     console.log("hi " + people);
//     break;
//   } else {
//     console.log(people);
//   }
// }
// people.push("Josh");//5
// people.unshift("matt"); //4
// people.pop(); //3
// people.shift(); //2
// for (people of people) { //1
//   console.log(people);
// }
// function fizzBuzz(n) {
//   for (i = 1; i < n; i++) {
//     if (i % 3 && 5 === 3 && 5) {
//       console.log("fizzBuzz");
//     } else if (i % 5) {
//       console.log("fizz");
//     } else if (i % 3) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
function myName() {
  n = "Joshua urquhart";
  return n;
}
let goodFood = ["pizza", "ice cream"];

function randomFood() {
  let random = Math.floor(Math.random() * goodFood.length);
  return goodFood[random];
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function displayOldNumber() {
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 !== 0) {
//       console.log(number[i]);
//     }
//   }
// }
// function displayEvenNumber() {
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       console.log(number[i]);
//     }
//   }
// }
//////////////////////////////////////////////////////////////////////
// function displayOldNumber() {
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 !== 0) {
//       return number[i];
//     }
//   }
// }
// function displayEvenNumber() {
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       return number[i];
//     }
//   }
// }

function displayOldNumber() {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      return number[i];
    }
  }
}
function displayEvenNumber() {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      return number[i];
    }
  }
}
