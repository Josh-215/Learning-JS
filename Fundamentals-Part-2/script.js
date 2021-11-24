"use strict";
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
