// "use strict";
// /* OBJECTS NOTES FROM RY 2.14.22
// //don't use the construct, use object literal notation which is just the curly braces
//
// // CREATING AN OBJECT - anything you observe can be an object
//
// let car = {};
// console.log(typeof car);
//
// //observable property to be Ford
// car.make = 'Ford';
//
// console.log(car);
//
// //property model is Mustang
// car.model = 'Mustang'; //the name of the property is the key and the associated value is the value
// console.log(car);
//
// //you dont have to create the property after the object; can structure the data in a group
// let cohort = {
//     name: 'Fortran',
//     startDate: '01/31/2022',
//     endDate: '07/31/2022'
// }
// console.log(cohort.name);
//
// // ASSIGNING PROPERTIES TO AN OBJECT - how to access property of object
//
//
//
// //ACCESSING PROPERTIES
// console.log(cohort.name);
// console.log('The car model is: ' + car.model);
//
//
// //FIND KEYS
// console.log(Object.keys(car));
// car.year = '1994';
// console.log(Object.keys(car));
// console.log(Object.keys(cohort));
//
//
// //In Keyword
//
// if (!('numofWheels' in car)) {
//     car.numOfWheels = 4;
// }
// console.log(car)
//
// //NESTED VALUES
//
// let elixirCohort = {
//     name: 'Elixer',
//     startYear : '2021',
//     students: ["Hector", "David", "Brendan", "Collin", "Daniel", "Emilio"]
//     hasGraduated: false;
// }
// console.log(elixirCohort.students); //to access or print the students
// console.log(elixirCohort.startYear);
// console.log(elixirCohort.hasGraduated);
//
//
// // ASSIGNING FUNCTIONALITY (BEHAVIORS) TO AN OBJECT
//
// car.honk = function () {
//     console.log("Honque, Honque")
// }
//
// car.honk();
// //let's get programmatic
//
// elixirCohort.printAllStudentNames = function (){
//     //console.log(this.students[0].name); don't want to keep having to do that
//     this.students.forEach(function (T){
//         console.log(student.name);
//     })
// }
//  END OF NOTES*/
//
// (function () {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */

//Ry's work out on how to create an object
let person = {
    firstName: 'Mersedyes',
    lastName: 'Livingston'
}

console.log(person.firstName);
console.log(person.lastName);
// // var person = {}; // when we start an object start this way
// // person.firstName = 'Mersedyes'; // string literal
// // person.lastName = 'Livingston';
// // console.log(person.firstName); // how you access the properties
// // console.log(person.lastName);
//
// methods are functions that belong to an object
//     /**
//      * TODO:
//      * Add a sayHello method (this means function; a method is a function that belongs to an object
//      * ) to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
// // person.sayHello = function () {
// //     console.log("Hello from " + person.firstName + " " + person.lastName)
// // }
// // person.sayHello();


// RY'S WORKOUT; ACCESS THE PROPERTIES
person.sayHello = function () {
    console.log('Hello from ' + person.firstName + ' ' + person.lastName); //would print the message that says hello with the person's name
    //COULD ALSO DO THIS METHOD
    return 'Hello from ' + this.firstName + ' ' + this.lastName
}
//when accessing the object (person) then you have access to it outside of the function
person.sayHello(); // have parenthesis to take in arguments
//How to refactor the above


//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//     /* STEPS
//     1. if shopper spends more than $200, they get 12%
//     2. JS program, using conditionals, that logs to the browser to know what each
//     shopper spend.
//     3. output: display a line with the name of the person, the amount before the discount,
//     the discount and the amount after the discount
//     MAKE SURE TO INCLUDE FORLOOP TO ITERATE THORUGH THE ARRAY
//     4. console.log the reference message
//
//      */
//     //put each shopper as their own object
//     // var shoppers = [
//     //     {name: 'Cameron', amount: 180},
//     //     {name: 'Ryan', amount: 250},
//     //     {name: 'George', amount: 320}
//     // ];
//     //
//     // let shoppersDiscountCalc = function () {
//     //     let discount = 0.88; // determined the 12% discount; decided to use .88 instead due to ease of math
//     //     let discountedPrice;
//     //
//     //     shoppers.forEach(function (person) {
//     //         if (person.amount > 200) { // using dot notation to look at shopper to call out the value of the amount
//     //             discountedPrice = person.amount * discount; // should return discounted price
//     //             console.log("Hey " + person.name + "! ");
//     //             console.log("You total before discount is: $" + person.amount);
//     //             console.log("Your total after the discount is: $" + discountedPrice);
//     //         } else {
//     //             console.log("Hey " + person.name + "! You total amount is: $" + person.amount);
//     //         }
//     //     })
//     // }
//     // console.log(shoppersDiscountCalc())
//     //need to access the array using a loop
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
// var books = [
//         {title: 'The Salmon of Doubt', author: {firstName: 'Douglas', lastName: 'Adams'}},
//         {title: 'Pride and Prejudice', author: {firstName: 'Jane', lastName: 'Austen'}},
//         {title: 'To Kill A Mockingbird', author: {firstName: 'Harper', lastName: 'Lee'}},
//         {title: 'Brave New World', author: {firstName: 'Aldous', lastName: 'Huxley'}},
//         {title: 'I Capture the Castle', author: {firstName: 'Dodie', lastName: 'Smith'}}
//     ];
//     console.log(books);
//     console.log(books[0].title); // used dot notation to narrow down
//     console.log(books[1].author.firstName);
//     console.log(books[2].author.lastName);

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
//      console.log('---')
//     function bookInfo(title, firstName, lastName){
//         books.forEach(function (book, index){
//             console.log('Book # ' + (index + 1)); // not user friendly to do books starting at 0; isolate the math then concatonate
//             console.log('Title: ' + book.title); //how I access the title using dot method
//             console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
//               console.log('---')
//         })
//     }
//
//     bookInfo();
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
//     function createBook (title, firstName, lastName){
//         //title, author firstName and lastName
//         books.push({
//             title: title,
//             author:{ // starts with the curly brackets bc it is an object within and object
//                 firstName: firstName,
//                 lastName: lastName
//             }})
//     }
//     createBook('Frankin Stein', 'Mary', 'Shelly');
//     console.log(books);
//
//     bookInfo();

//RY'S BREAKDOWN OF THE BONUS
// function createBook(title, authorName) {
//     let authorNameSplit = authorName.split(' ');
//     return {
//         title: title,
//         author: {
//             firstName: authorNameSplit[0]
//             lastName: authorNameSplit[1]
//         }
//     }
// }
// addBook(createBook('Clean Code', 'Bob Martin'));
// function addBook(book){
//     books.push(book);
// }
// function showBookInfo(book) {
//     console.log('Title: ' + book.title); //how I access the title using dot method
//     console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
//     console.log('---')
// }
//
// printAllBooks(books);
// })();
