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

