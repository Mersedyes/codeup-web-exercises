"use strict"

//alert("Welcome to Donut Disturb")
//Mini exercise #1
//write a function named getName() which will return the result of the user inputting their name(s)
function getName(){
    return prompt("What is your preferred name?");
}
//console.log (getName()); //open-close parenthesis is the invocation

function showName(yoName){
    alert (yoName);
}
showName(getName()); // getNAme will return the user name and passes to showName
//console log the invocation of getName() to ensure it works properly showName(username)

//It takes in 'username' as an argument and alters the user to their name

//Pass an invocation of getName() as an argument to the invocation of showName()

//showName() should be void function. That is, it should not return a value - only execute code

//Test to ensure your code is working as expected