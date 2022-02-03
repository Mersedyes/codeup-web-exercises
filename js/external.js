"use strict"

// using the alert function to show a message
alert("Welcome to my Website");
//message prompt
let userInput = prompt('Hello from JavaScript! What is your name?');
console.log(userInput);

let userName = prompt('It\'s so nice to meet you! May I ask a question?'); // let variable = prompt is called an assignment
console.log(userName); //this tells the computer to look in shoebox that has something stored

//use prompt to ask user their fav color
let favColor = prompt('What is your favorite color?');
alert(`${userName}, ${favColor} is my favorite color too!`);

//First exercise movies
let dailyPrice = 3.00;
let lilMermaid = prompt("How many days do you want to keep The Little Mermaid?") * dailyPrice;
let broBear = prompt("How many days do you want to keep Brother Bear?") * dailyPrice;
let herc = prompt("How many days did you want to keep Hercules") * dailyPrice;

let totalCost = lilMermaid + broBear + herc; //summed up cost

alert("Thank you! Your total is $" + totalCost); // output alert

//Second exercise
let googleMoney = prompt("How many hours will you work this week for Google?") * 400;
let amazonMoney = prompt("How many hours will you work this week for Amazon") * 380;
let metaMoney = prompt("How many hours will you work this week for Metaverse?") * 350;
let totalIncome = googleMoney + amazonMoney + metaMoney;

alert("You will earn a total of $" + totalIncome + " this week.");

//Third exercise
let maxClassSize = prompt("What's the max class");
let currentClassSize = prompt("How many people are in the class currently?");
let conflictOrNo = confirm("Click OK if this class conflicts with any other scheduled class.");

if (maxClassSize < currentClassSize + 1 || conflictOrNo) {
    alert("Sorry, this class is at capacity");
    console.log("Nope");
} else {
    alert("Congradulation, we'll see you at the start of the semester");
    console.log("Yeeeeeeeaaaaahhhhhhh");
}
//Four exercise
let productMin = 2;
let productsInCart = prompt("How many items are you getting?");
let expirationDate = prompt("What is the expiration date of the offer? (Please enter MM/DD/YYY");
let inputDate = new Date(expirationDate);
let todaysDate = new Date();
if (inputDate.setHours(0,0,0,0) <= todaysDate.setHours(0,0,0,0)){
    let expired = true;
} else {
    expired = false;
}
let blackCardMember = confirm("Click OK if you are a Black Card Member");

if (!expired && ((productMin < productsInCart) || blackCardMember)) {
    console.log("Accepted");
    alert("Ok, big money! You get to spend less money!");
} else {
    console.log("Invalid");
    alert("Nope. You tried it! No discount for you. Go Google a coupon.");
}
