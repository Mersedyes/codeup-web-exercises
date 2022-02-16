(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * this.radius ** 2; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding){
                console.log(Math.round(this.getArea()));// used the Math.round method
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea);
        }
    };
//console.log(circle.getArea()); //output was 11
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
        circle["radius"] = 5; // didn't know this part
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

// //ALTERNATIVE WAY TO SOLVE
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
