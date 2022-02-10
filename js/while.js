"use strict";

//While While While Thoughts (while loops)

let numberInput = 2;
while (numberInput <= 65536){
    if (numberInput % 2 === 0){
        console.log(numberInput);
        numberInput *= 2;
    }
}

/*Do While Loop Exercise
An ice cream seller can't go home until she sells all of her cones. First write enought
code that generates a random number between 50 and 100 representing the amount of
cones to seel before you start your loop. Inside of the loop your code should
generate another random number between 1 and 5, simulating the amount of cones
being bought by her clients. Use a do-while loop to log to the console the amt
of cones sold to each person. the below code shows how to get random numbers for
this exercise
 */

//This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50
//This expression will generate a random number between 1 and 5
var randomNumber = Math.floor(Math.random() * 5) + 1;

do {
    console.log(randomNumber + " cones have been sold...I have" + allCones + " left.");
    allCones -= randomNumber;
} while (allCones - randomNumber >= 0);

console.log("Cannot sell you " + randomNumber + " cones. I only have " + allCones + " left.");
console.log("Yay! I sold them all!");