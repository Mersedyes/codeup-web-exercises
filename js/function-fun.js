"use strict";

tryGetRideshare(20,true,  19, prompt("How much mula do you have?"));
tryGetRideshare(costOfRide: 10.50, driverAvailable: true, )

function getFundsAvailable(){//adding up the funds available with number of riders or funding source
    let moneyInAcct = parseFloat(prompt("How much is in the account"));
   // let numOfRiders; // keeps the scoping down
    //if (confirm("Are you splitting this ride with someone else?")){ //can conditionally assign the numOfRiders
     //   numOfRiders = prompt("How many riders do you have");
    }
}
function tryGetRideshare (costOfRide, driverAvailable, totalFundsAvailable){
    let moneyInAcct = 100;
    let creditsAvailable = 7.50;
//dont know how much the ride is going to be - done
    //dont know if the driver is ready/nearby - done
    //money sources??
    // how much money is available
    if (driverAvailable && (moneyInAcct >= costOfRide || creditsAvailable > costOfRide)){
        console.log("Your ride is on the way");
    } else{
        console.log("No drivers are available at this time..");
    }
}