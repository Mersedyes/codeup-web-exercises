"use strict";

/*warm-up 2.14.22
* Write a function called findAverage that takes in an array of integers representing
* grades and returns the average.
Example input: [95, 74, 86, 100]
Example output: 88.75 (edited)*/

// let total;
// function findAverage(){
//     let grades = [95, 74, 86, 100];
//     for (let i = 0; i < grades.length; i++){
//         total += grades[i];
//     }
//     let avg = total/grades.length;
//     console.log(avg);
// }
//
// /*Alternative solution?*/
//
// const grades = [95, 74, 86, 100];
// function findAverage(grades){
//     const total = grades.reduce((acc, c)) => acc + c, 0);
// return total / grades.length;
// }
//
// const average = findAverage(grades);
// console.log(average);
//
// /*Ry Solution
// * can use the reduce() function but that might be overkill for this, so not
// * necessary*/
//
// function findAverage(grades){
//     let sum = 0;
//     grades.forEach(function (grade) {
//         sum += grade;
//     })
//     return sum / grades.length;
// }
// console.log(findAverage([95, 74, 86, 100]));
