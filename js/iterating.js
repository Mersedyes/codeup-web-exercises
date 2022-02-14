// // "use strict;"
// //
// // //console.log("test")
// //
// // /*If your program is about dogs, you would not want to create a different variable for
// // * each dog. Arrays allow you to make one variable where each of the elements is a dog
// // * name. This allows the program to be more flexible without having to manipulate the
// // * source code. Arrays are fundamental in programming, and all over the place.
// // *
// // * An array is a data structure that holds an ordered list of items, like a grocery store
// // * list.*/
// // // var dog1 = "Fido";
// // // var dog2 = "Spot";
// // // var dog3 = "Fifi";
// // // var dog4 = "Lola";
// //
// // //descriptive function name. You declare an array with square brackets where on the inside you put the dog names
// // var dogNames = ["Fido", "Spot", "Fifi", "Lola"]; // don't have to declare array on the onset always but we will in this case.
// // var dogAges = [5, 2, 3, 10]; // order of elements in array is important and we must make those changes when needed
// // var dogs = ["Fido"] //let you combine different elements (heterogenous elements) --> not good practice
// // console.log("Dog names: " + dogNames); // output to the console of the array and concatonate
// //
// // /*arrays are complex data types, they have more stuff that will tell you about the array.
// // * One of the fundamental properties of arrays is the length (returns the count of the
// // * elements inside.*/
// // // how to speak, accessing elements
// // console.log(dogNames.length);
// //
// // //first element is at index 0 (zero based index)
// // // note that index can also be referred to as a subscript
// // console.log(dogNames[0]); // use a variable or a literal, should output Fido
// //
// // // log the 2nd element
// // console.log(dogNames[1]);
// //
// // // log the 3rd element
// // console.log(dogNames[dogNames.length - 2])
// //
// // // the last element is at index length - 1
// // // how to speak accessing the last element
// // // the last element in the array
// // var lastIndex = dogNames.length - 1;
// // console.log(dogNames[lastIndex]);// should output Lola and is concationated version of code above
// //
// // //loops and arrays are like peas and carrots
// // for (var i = 0; i < dogNames.length; i++){// iterates 4 times and when i is 4 it stops; this is a counting loop
// //     //this is the body
// //     // i is the index, with control variables inside a loop just use one letter like 'i'
// //     console.log("Dog at index: " + i + " is " + dogNames[i]);
// // }
// //
// // //thus even index values will be considered an odd element
// // for (let i = dogNames.length - 1; i >= 0; i--){
// //     if (i % 2 === 0){
// //         console.log("Dog at index " + i + " is " + dogNames[i]);
// //     }
// // }
//
// dogNames.forEach(function (dogName, index) { // this is a call back and needs a function
//     //this function will be executed on each element
//     // as the forEach iterates over the array
//     // if(a certain record) {
//     // skip that record
//     // }
//
//     //dogName = "Zantor";
//     dogNames
//     // output the odd dogs (i.e...the dog at index 0 is an odd dog)
//     if (index % 2 === 0) {
//         console.log("Dog at index " + index + " is " + dogName);
//     }
// // // stop the loop with break if dogName is Spot
// // if (dogName === "Spot") {
// //     return;
// // }
// });
//
// console.log(dogNames);

(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Mersedyes', 'Wesley', 'Elijah', 'AvaMarie'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (names) {
        console.log("Here is the person representing: " + names);
    });
    // expected output: "Mersedyes"
    //expected output: "Wesley"
    // expected output: "Elijah"
    // expected output: "AvaMarie"

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

        //Translation of instructions
        // write a function called first that has 1 array parameter and returns
        // the element
        // when getting what a customer wants, you may need to translate immediate into code
        // these function return something (not print or output)
    let arrayOfNumbers = [1, 2, 3, 4, 5];

    function first(inArray) {
        // console.log("Function returns the first element: " + inArray[0]);
        return inArray[0];
    }

    function second(inArray) {
        //console.log("Function returns the second element: " + inArray[1]);
        return inArray[1];
    }

    function last(inArray) {
        //console.log("Function returns the last element: " + inArray[inArray.length - 1]);
        return inArray[inArray.length - 1];
    }

    console.log(first(arrayOfNumbers));
    console.log(second(arrayOfNumbers));
    console.log(last(arrayOfNumbers));
})();
