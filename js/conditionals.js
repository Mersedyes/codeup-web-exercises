// "use strict";
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// function analyzeColor(colorInput) { //the parameter is colorInput; used to take in dynamic input (aka the unknown)
//     colorInput = colorInput.toLowerCase();
//
//     if (colorInput === "red"){
//         console.log("Strawberries are red")
//     } else if (colorInput === "blue"){
//         console.log("Blue is the color of the sky");
//     } else if (colorInput === "orange"){
//         console.log("Orange is the color of the horizon during a sunset");
//     } else if (colorInput === "yellow"){
//         console.log("Yellow like canaries and lemons");
//     } else if (colorInput === "green"){
//         console.log("Green like algae in a pond");
//     } else if (colorInput === "indigo"){
//         console.log("I don't really know what's indigo but it is a color");
//     } else if (colorInput === "Violet ") {
//         console.log("Violet like African Violets");
//     } else if (colorInput === "Black"){
//         console.log("Black like an onyx. Although black is the absorption of all colors");
//     } else if (colorInput === "White"){
//         console.log("White like the clouds on a sunny day");
//     } else (`Hmmmm....I didn't think of that ${colorInput}! How cool!`);
// }
// analyzeColor("red");
// analyzeColor("blue");
// analyzeColor("orange");
// analyzeColor("yellow");
// analyzeColor("green");
// analyzeColor("indigo");
// analyzeColor("violet");
// analyzeColor("black");
// analyzeColor("white");
// analyzeColor("randomColor");
// //END OF THIS ACTIVITY
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
//     randomColor = colors[Math.floor(Math.random() * colors.length)];
// // /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */ DONE
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
const analyzeColor = colorInput => {
    colorInput = colorInput.toLowerCase();
    switch (colorInput){
        case "red"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "blue"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "orange"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "yellow"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "green"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "indigo"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "violet"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "black"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        case "white"
        console.log(colorInput + ' is the perfect color I was thinking of too.');
        break;

        default:
            console.log("I didn't think about that one, but it is the perfect color");
            break;
    }

    analyzeColor(colorInput);
}
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */