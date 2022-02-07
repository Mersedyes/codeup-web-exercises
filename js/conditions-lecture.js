"use strict"

//need to redo this whole thing....how frustrating
function getToDestination(age, isInsured, hasCar, hasDriversNearby, hasEnoughMoney) {
    // let age = 19;
    // let isInsured = true;
    // let hasCar = false;
    // let canGetRideshare = true;

//need to run through this again
    // alternative is: (age && isInsured && hasCar){}
    if (age >= 16 && isInsured === true && hasCar === true){
        console.log("They see me rolling....they hatin");
    } else if
        //alternative is: else if (canGetRideshare){}
        (age < 16 && isInsured === false || hasCar === false && canGetRideshare( hasDriversNearby, hasEnoughMoney)){
        console.log("Use your bus pass or get an Uber...Lyft if you are woke");
    } else {
            console.log("You made all these plans with no where to get there...now look at you")
    }
}

//the best option for part 2:
function canGetRideshare(hasDriversNearby, hasEnoughMoney){
    if (hasDriversNearby && hasEnoughMoney){
        return true;
    } else {
        return false;
    }
}
getToDestination(16, true, true, true, true );
//
// Switch Statements - alternative to if else statements
//
// if(todaysWeather === "snowing") {
//console.log ("stay inside")
//a way to be explicit in what you want
todaysWeather = todaysWeather.toLowerCase();
switch (todaysWeather) {
    case "snowing":
        console.log("please stay inside");
        break;

        case "raining":
            console.log("grab your umbrella and boots");
            break;

    case "hailing":
        console.log("cover your car and call your insurance company...");
        break;

    default:
        console.log("go play in the sun");
        break;
}