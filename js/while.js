// "use strict";
//
// //While While While Thoughts (while loops)
//
// // let numberInput = 2;
// // while (numberInput <= 65536){ //num is 65536
// //     if (numberInput % 2 === 0){
// //         console.log(numberInput);
// //         numberInput *= 2;
// //     }
// // }
//
// /*Do While Loop Exercise
// An ice cream seller can't go home until she sells all of her cones. First write enought
// code that generates a random number between 50 and 100 representing the amount of
// cones to seel before you start your loop. Inside of the loop your code should
// generate another random number between 1 and 5, simulating the amount of cones
// being bought by her clients. Use a do-while loop to log to the console the amt
// of cones sold to each person. the below code shows how to get random numbers for
// this exercise
//  */
//
// //This is how you get a random number between 50 and 100
// let conesInInventory = Math.floor(Math.random() * 50) + 50;
// //This expression will generate a random number between 1 and 5
//
// do {//every iteration is a new customer
//     let requestedCones = Math.floor(Math.random() * 5) + 1;
//     // do you have enough cones to sell them
//     //what happens when you sell them?
//     console.log(requestedCones + " cones have been sold...I have" + conesInInventory + " left.");
//     conesInInventory -= requestedCones;
// } while (conesInInventory - requestedCones >= 0);//when you do stop selling cones
//
// console.log("Cannot sell you " + randomNumber + " cones. I only have " + conesInInventory + " left.");
// console.log("Yay! I sold them all!");
//
// //Notes practice
// // let numberInput = 2;
// // while (numberInput <= 65536){ //num is 65536
// //     if (numberInput % 2 === 0){
// //         console.log(numberInput);
// //         numberInput *= 2;
// //     }
// }
//
// // // How would you test a loop unit? See below for explanation
// // loopNums();
// // function  testLoopsNums() {
// //     let num = 2
// // //arange
// // //act
// //     let num = loopNums(); //tests the assumption
// //     console.log(num)
// // //assert
// //     return num === 65536;
// // }
// // console.log(testLoopsNums())// return true or false with this assertion