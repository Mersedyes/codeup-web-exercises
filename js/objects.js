"use strict";
/* OBJECTS NOTES FROM RY 2.14.22
//don't use the construct, use object literal notation which is just the curly braces

// CREATING AN OBJECT - anything you observe can be an object

let car = {};
console.log(typeof car);

//observable property to be Ford
car.make = 'Ford';

console.log(car);

//property model is Mustang
car.model = 'Mustang'; //the name of the property is the key and the associated value is the value
console.log(car);

//you dont have to create the property after the object; can structure the data in a group
let cohort = {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022'
}
console.log(cohort.name);

// ASSIGNING PROPERTIES TO AN OBJECT - how to access property of object



//ACCESSING PROPERTIES
console.log(cohort.name);
console.log('The car model is: ' + car.model);


//FIND KEYS
console.log(Object.keys(car));
car.year = '1994';
console.log(Object.keys(car));
console.log(Object.keys(cohort));


//In Keyword

if (!('numofWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car)

//NESTED VALUES

let elixirCohort = {
    name: 'Elixer',
    startYear : '2021',
    students: ["Hector", "David", "Brendan", "Collin", "Daniel", "Emilio"]
    hasGraduated: false;
}
console.log(elixirCohort.students); //to access or print the students
console.log(elixirCohort.startYear);
console.log(elixirCohort.hasGraduated);


// ASSIGNING FUNCTIONALITY (BEHAVIORS) TO AN OBJECT

car.honk = function () {
    console.log("Honque, Honque")
}

car.honk();
//let's get programmatic

elixirCohort.printAllStudentNames = function (){
    //console.log(this.students[0].name); don't want to keep having to do that
    this.students.forEach(function (T){
        console.log(student.name);
    })
}
 END OF NOTES*/

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {}; // when we start an object start this way
person.firstName = 'Mersedyes'; // string literal
person.lastName = 'Livingston';
console.log(person.firstName); // how you access the properties
console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method (this means function; a method is a function that belongs to an object
     * ) to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function () {
    console.log("Hello from " + person.firstName + " " + person.lastName)
}
person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

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

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
