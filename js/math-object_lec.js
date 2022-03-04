"use strict";

//Math.random() returns a floating-point, pseudo-random number in the rand
let randomNum = Math.random();
console.log("Before multiplying: " + randomNum);
console.log("After: " + (randomNum * 100));
console.log("Exclusive 1: " + (randomNum * (100-20) + 1));

let rangedNum = Math.floor((randomNum * (100 - 20) + 1) + 20); // 1 is exclusive in math
console.log(rangedNum);

Math.ceil() // will give you the smallest number to round up
Math.pow() // good for exponenets
Math.sqrt() // gives square root
Math.PI // give the constant for pi
