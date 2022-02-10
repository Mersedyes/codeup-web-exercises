/* Notes
while / do-while - you know what will stop the loop, but you don't know how many iterations
the loop will execute

for-loop - you know what will stop the loop AND how many iteration the loop executes
 */
//basics of a loop example
// let num = 8;
// for ((num; num <= 50; num++){
//     console.log(num)
// })
//   1. control variable for(num)  2. checking the control variable against another value 3. execute code  4. runs the iterator
// for (/*control variable*/; /*test condition*/; /*iterator*/){ // the control and iterator is what makes the  loop work
//     // code to run for each iteration of the loop
// } // 5. braking the loop once it returns false
//
// let letters = ""; // needs to be numeric not a string alone;
// console.log(letters.length);
//
// for (let i = 1; i <= 36; i++){ // stop the loop when the character count is 36
//     console.log(i);
//     letters += "z";
//     i = letters.length -1;
//     console.log(letters);
// }
// console.log(letters.length);
// TODO: Use a while look to output the numbers from 8-50
// TODO: Using the same sample, output the ODD numbers from 8-50
// TODO: HINT --> Use the % operator..

// let num = 8;
// while (num < 50){
//     num++;
//     if (num % 2 === 0){
//         console.log(num);
//     }
// }

// let fullNameEntered = false;
// let names = "";
//
// //WE DONT KNOW HOW MANY NAMES THEY HAVE!
// do {
//     names += prompt("Please enter or add to your name");
//     fullNameEntered = confirm("Is this your full name: " + names + "?")
// }
// alert("This is your name: " + names);

// TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//
// let numSpaces = 30;{
//     console.log("Welcome to the Heavily Priced Parking Garage");
//     numSpaces -= 2;
// } while (numSpaces)
// console.log("The parking garage is full!");


// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
// let password = "passwOrd123";
// let isCorrect = false;
// let attempt = "";
// while (isCorrect) {
//     attempt = prompt("Please enter your password");
//     isCorrect = (attempt === password);
//     if (!isCorrect){
//         alert("aht aht wrong password...try again");
//     }
// }


// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
function zeroToNum(num) {
    for (let i = 0; i <= 30; i += 2) { // the output will always be even
        if (i === 0) {
            console.log(i + " is even");
        }
        } //else {
        // console.log(i + " is odd"); // ideally this should never run as all the numbers will be even
    }
    zeroToNum(30);

// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

function marcoPoloOrNum(maxNum){
    for (let i = 1; i <= 40; i++){
        if (i % 3 === 0 && i % 5 ===){
            console.log(i + " Marco Polo");
        } else if (i % 3 === 0){
            console.log(i + " Marco");
        } else if ((i % 5 === 0)){
            console.log(i + " Polo");
        } else {
            console.log(i + " I'm not playing."); // if 'i' is not able to be divided by 3 or 5 then this is what will print
        }
    }
}
marcoPoloOrNum(40) //print console