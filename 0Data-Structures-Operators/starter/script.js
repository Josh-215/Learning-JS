"use strict";

// Data needed for a later exercise
//const flights =
// "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = "20:00",
    adderss,
  }) {
    console.log(
      `order received!${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adderss} at ${time} `
    );
  },
};
const arr = [4, 5, 6];
// the bad way of doing this
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// The Spread Operator (...)good way
const newArr = [1, 2, 3, ...arr];
console.log(newArr);
const newMenu = [...restaurant.mainMenu, "cookeis"];
console.log(newMenu);
//create copys
const mainMenu = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
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
// });

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
