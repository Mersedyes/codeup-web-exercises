"use strict;"

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


// let oddPrompt; //
//
// do {
//     oddPrompt = parseInt(prompt("Please enter an odd number between 1 and 50")) // parseInt turns a number into a floating
//     console.log("The number you have entered: " + oddPrompt + i);
// } while (oddPrompt % 2 !== 1 && oddPrompt < 1 || oddPrompt >= 50); // 1. is it odd 2. a number between 1 and 50
//
// console.log("Your number is: " + oddPrompt + " and is a valid odd number between 1 and 50");
// for (var i = 1; i <= 50; i++) {
//     if (i % 2 === 0) { // this skips even numbers
//         continue; // if the number is even, continue to the next iteration
//     }
//     if (oddPrompt === i) {
//         console.log("Uhhhh skipping this number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i); // happy path neither even nor ordd
//     }
// }

// if (userChoice){
//     var userNumber = parseInt(prompt("Enter an odd number")); // prompting user for number input and parsing it to a number
//     if (userNumber % 2 === 0){ // is the number even or odd if else statement
//         alert("Your number is even steven");
//     }//run the numbers
// } else {
//     alert("Your number is odd"); //dismissal of user
// }

/* DOC ROB NOTES FOR HOW TO DO BREAK AND CONTINUE EXERCISE*/
//declare variable called oddNumber and initialize it to promptForOddNumberInRange
var oddNumber = promptForOddNumberInRange(1, 50);
oddNumber = parseInt(oddNumber);

printOddNumbersInRangeWithSkip(1, 50, oddNumber);

function printOddNumbersInRangeWithSkip(low, high, skipNumber){
    //Inclusive
    for (let i = low; i <= high; i++){
        if (i === skipNumber || i % 2 ===0){ // use an and when there is dependency, use || when they are independent of each other
            //if i is the skipNumber then output something special
            if (i === skipNumber){
                console.log("Yikes! Skipping number: " + i);
            }
            continue; // moves to the next iteration
        }
        // if you get here then should be an odd number that is within range and not skipNumber
        console.log("Here is an odd number: " + i);
    }
}

function promptForOddNumberInRange(low, high, skipNumber) {
    //loop until user gives an odd number in the range
    while(true){
        var result = prompt("Enter an odd number from " + low + " to " + high);
        console.log(result);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            // the checks needing to be in place listed below:
            // % is a remainder if odd its a remainder of 1 even would be 0
            //need to know if a character or number was entered
            //is the number entered in range?
            break; // this break causes the closest contained loop to lead to the return result
        }
    }
   // console.log(result); should not invisible outside of the function, not global
    return result;
}
