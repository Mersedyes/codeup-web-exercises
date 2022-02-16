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

/*warm-up 2.16.22
* JS Object Warmup, pt 1:
Create an object representing a person. It should have properties representing:
    names (an array of strings)
    date of birth
    occupation
Hard code some values in that object, then log it and its properties to the console*/

var person = {
    name: ["Mersedyes", "D", "Livingston"],
    dob: new Date(1988, 7, 22),//"July 22",
    occupation: "student"
};
console.log("The name of this person is: " + person.name);
console.log("The date of birth for this human is: " + person.dob);
console.log("The occupation of this human is: " + person.occupation);

//What if we wanted to add another object with the same properties id?
let person2 = Object.create(person); //Object
person2["names"] = ["Ry", "Sutton"];
person2["occupation"] = "Father of the year";
person2.dob = "01.01.1992";
console.log(person2);

/* CHALLENGE #2 FOR WARM-UP
JS Object Warmup, pt 2:
Create an object representing a person’s contact info. It should have:
    phone number
    street address
    state
    postal code
    email address
Hard code some values in that object, then log it and its properties to the console
 */
//this is the constructor function
function contactInfo(phone, address, city, state, postal, email){
    //this is called object mapping
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postal = postal;
    this.email = email;
    //console log inside of constructor function is allowed
    console.log(typeof this); // output is object
}
const contactDetail = new contactInfo('2104397938', '13806 Quiet Fox Ln', 'San Antonio','TX', '78245', 'mersedyes.livingston@gmail.com');
// var contactInfo = {
//     phoneNum: '210.439.7938',
//     address: '13806 Quiet Fox Ln',
//     state: 'Texas is a country',
//     postal: '78245',
//     email: "mersedyes.livingston@gmail.com"
// };
console.log(contactDetail.phone);
console.log(contactDetail.address);
console.log(contactDetail.city + ", " + contactDetail.state + " " + contactDetail.postal)

/*CHALLENGE #3 ACCEPTED
* JS Object Warmup, pt 3:
Create a property on the person object to store their contact info
    -> Assign the contact info variable to that property
    -> Log that entire object and its properties to the console
*/


