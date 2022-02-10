"use strict";


//Part Zero - Exercise 1: making a file named for_loops.js and link to loops.html
//DONE

//Part One - Exercise 2
function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        console.log(num + "multiplied by " + i + " is " + (num * i));
    }
}
showMultiplicationTable(7);


//Part Two - Exercise 3
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (var r = 1; i <= 10; r++) {
    let random = getRandomNum(200,20);
    if (random % 2 === 0){
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

//Part Three - Exercise 4 create a for loop that uses console.log to create the output shown
function treeOfNumbers(height) { // created a function
    for (var t = 1; t <= height; t++){ // initialization of loop and condition
        let tree = t; //assign variable
        let space = '' + i;

        for (var h = 1; h <= t; h++){
            tree = i.toString();
        }

        let gap = space.repeat(height + 1 - i);
        tree = tree + gap;
        console.log(tree);
    }
}
treeOfNumbers(9);

// Part Four - create a for loop that uses console.log to create the output shown
// function minusFive(five) {
//     for (var f = 1; f <= )
// }

