"use strict";

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
function sayHello(name){
    return `Hello, ${name}`;
}
console.log(sayHello("Mersedyes"));
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
// let myName = prompt("What is your preferred name?");
//
// let helloMessage = sayHello("Mersedyes");
//
// console.log(helloMessage)
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
// ITS DONE, JUST LOOK UP
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
// var random = Math.floor((Math.random() * 3) + 1);
//
// function isTwo(num){
//     return num === 2;
// }
// console.log(random + " is equal to 2: " + isTwo(random));
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */

//function calculateTip()
// function calculateTip(){
//     let billAmt = parseFloat( $("billAmt").value);
//     let tipPercent = parseFloat( $("tipPercent").value);
//     let partySize = parseFloat( $("partySize").value);
//
//     if (isNaN((billAmt) || billAmt <= 0))
//     {
//         alert("Your bill cannot be less zero or less.");
//     }
//     else if (isNaN(tipPercent) || tipPercent <= 0){
//         alert("The percentage should be a whole number.");
//     }
//     else if (isNaN(partySize) || partySize <= 0){
//         alert("You have mass and take up space, you matter. Never count yourself as less than a whole number.");
//     }
//     else {
//         let total = billAmt * (tipPercent / 100) / partySize;
//
//         $("totalTip").value = total.toFixed(2);
//     }
// }
//ALTERNATIVE CODE THIS IS FUNCTIONAL
let billWhat = parseFloat(prompt("How much is the bill?"));
let tipWhat = parseInt(prompt("What percentage would you like to tip (ex. 20 for 20%)"))/100;

function calculateTip(tipPercentage, billAmount) {
    return tipPercentage * billAmount;
}

console.log(calculateTip(.20, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));
console.log(calculateTip(tipWhat, billWhat));
alert("You should leave $" + calculateTip(tipWhat, billWhat) + " as a tip.");

// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
// function applyDiscount(a, b){
//     //calculating discount
//     let discount = b - a;
//
//     //calculating discount percentage
//     let percentDis = (discount / b) * 100;
//
//     return percentDis
// }
// //driver code
// let b, a;
//     b = 120;
//     a = 100;
// //document.write method writes a string of text to a document stream opened by document; used for testing purpose
// //is this acceptable or has this phased out?
// document.write(applyDiscount(a, b).toFixed(2))
// document.write("%");
// document.write("<br>");
//
// b = 1000;
// a = 500;
//
// document.write(applyDiscount(a,b).toFixed(2))
// document.write("%");
//ALTERNATIVE TO THIS PROBLEM IF ABOVE IS NOT ACCEPTABLE PRACTICE; might need to revamp to make sure all the variables are called out
function applyDiscount(){
    let nameFirst = document.getElementById("first_name").value;
    let nameLast = document.getElementById("last_name").value;
    let phoneNum = document.getElementById("phone_number").value;
    let quantity = document.getElementById("quantity_order").value;
    let priceItem = document.getElementById("price_fixed").value;

    let totalPrice = quantity * priceItem;
    let priceDiscount = 0;
    let discountTotal = 0;
    const taxRate = 0.0825; // san antonio, tx tax rate as of 2/5/22
    let tax = totalPrice * taxRate;
    let totalPlusTax = totalPrice + tax;

    if (quantity <= 20){
        priceDiscount = .10;
        totalPrice = totalPrice - (totalPrice * priceDiscount);
    }
    else if (quantity >= 21 && <= 30){
        priceDiscount = .20;
        totalPrice = totalPrice - (totalPrice * priceDiscount);
    }
else if (quantity >= 31 && <= 40){
        priceDiscount = .30;
        totalPrice = totalPrice - (totalPrice * priceDiscount);
}
else if (quantity >= 41 && <= 100){
        priceDiscount = .40;
        totalPrice = totalPrice - (totalPrice * priceDiscount);
}
document.getElementById("order_total").value = "$" + totalPlusTax.toFixed(2);
}// end of applyDiscount function
