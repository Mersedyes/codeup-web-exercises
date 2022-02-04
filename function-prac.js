"use strict"

alert("Welcome to Donut Disturb")
//alert("Welcome to Donut Disturb")
//Mini exercise #1
//write a function named getName() which will return the result of the user inputting their name(s)
//console log the invocation of getName() to ensure it works properly showName(username)
//It takes in 'username' as an argument and alters the user to their name
//Pass an invocation of getName() as an argument to the invocation of showName()
//showName() should be void function. That is, it should not return a value - only execute code
//Test to ensure your code is working as expected

function getName(){
    return prompt("What is your preferred name?");
}
//console.log (getName()); //open-close parenthesis is the invocation

function showName(yoName){
    alert (yoName);
}
showName(getName()); // getName will return the username and passes to showName

//Mini exercise #2
// Make a function named isLowerCase(letter) which returns true if the parameter is lowercased;
// //otherwise it returns false
// Write a function named double(n) that returns a number times two
// Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type; otherwise it returns false.
function isLowerCase(letter){
    return letter == letter.toLowerCase() && letter != letter.toUpperCase();
}
console.log("Check: ", isLowerCase("Check"));
console.log("check: ", isLowerCase("check"));
console.log("ChEck: ", isLowerCase("ChEck"));
console.log("CAPITAL: ", isLowerCase("CAPITAL"));

//Part 2 of exercise #2
function double(n){
    return n * 2;
}

console.log("Check 2 * 2: ", double(2));
console.log("Check 35.123 * 2: ", double(35.123));
console.log("Check 281 * 2: ", double(281;

//Part 3 of exercise #3
function areIdentical(input1, input2){
    return input1 === input2;
}

console.log("Check if One and one are identical: ", areIdentical("One", "one"));
console.log("Check if one and one are identical: ", areIdentical("one", "one"));
console.log("Check if one and 1 are identical: ", areIdentical("one", 1));