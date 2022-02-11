"use strict";

// function randomNumber(max, min) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// for (var r = 1; i <= 10; r++) {
//     let random = getRandomNum(200, 20);
//     if (random % 2 === 0) {
//         console.log(random + " is even");
//     } else {
//         break
//     }
// }
// console.log("The loop is finished");

let oddPrompt = parseInt(prompt("Please enter an odd number between 1 and 50"))
    console.log("The number you have entered: " + oddPrompt + i);

for (var i = 1; i <= 50; i++) {
    console.log("Your number is: " + oddPrompt + " and is a valid odd number between 1 and 50");
    if (i % 3 === 0) {
        break;
    }
    if (oddPrompt === i) {
        console.log("Uhhhh skipping this number: " + i);
    } else {
        console.log("")
    }
    if (i > 50 || ){
        continue;
    }
}
// if (userChoice){
//     var userNumber = parseInt(prompt("Enter an odd number")); // prompting user for number input and parsing it to a number
//     if (userNumber % 2 === 0){ // is the number even or odd if else statement
//         alert("Your number is even steven");
//     }//run the numbers
// } else {
//     alert("Your number is odd"); //dismissal of user
// }