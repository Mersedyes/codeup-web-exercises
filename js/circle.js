(function (x) {
    "use strict";

    // create a circle object
    var circle = {radius: 3, getArea: function () {
            // TODO: complete this method
            //  let area = Math.PI * (this.radius^2);
            // hint: area = pi * radius^2
            return Math.round((Math.PI * this.radius * this.radius), 2); // TODO: return the proper value
        }, logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true){
                return Math.round(this.getArea);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }};

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

//ALTERNATIVE WAY TO SOLVE
// "use strict";
//
// //create a circle object
// function circle(radius)
// {
//     this.radius = radius; // this refers to the object
//     // area method
//     this.area = function ()
//     {
//         //Math.PI is a constant
//         return Math.PI * this.radius * this.radius;
//     };
//     // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));
