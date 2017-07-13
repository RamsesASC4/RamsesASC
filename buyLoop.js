var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

console.log("You have $1,000"); // tell the player

var bank = 1000; //start the player with $1000
var inventory = ["high rule sword", "potion", "shield", "bow"];

var answer = prompt("Which item do you want to buy"); //+ inventory[0]); 
//prompt the user if they want to buy the sword

var bag = []

// if (answer === "yes"){
//     bank = bank - 100;
//     console.log("You have " + bank + " left" );
// }
// for (var x = 0; x <inventory.length; x++){
//     var answer = prompt("Would you like to buy a" + inventory[x]);

//     if (answer === "yes"){
//     bank = bank - 100;
//     console.log("You have " + bank + " left" );
//     }
// }

while (bank>99){
    console.log("You have $" + bank + " left. high rule sword = $500, potion = $100, shield = $400, bow = $500" );
    if (answer == "high rule sword"){
        bank = bank - 500
        bag.push("high rule sword")
        console.log("You bought the high rule sword!")
    }else if(answer == "potion"){
        bank = bank - 100
        bag.push("potion")
        console.log("You bought a potion!")
    }else if(answer == "shield"){
        bank = bank - 400
        bag.push(shield)
        console.log("You bought a shield!")
    }else if(answer == "bow"){
        bank = bank - 500
        bag.push(bow)
        console.log("You bought a bow!")
    }else{
        console.log("Try agiain")
    }
     if(bank<99){
         console.log("Unable to purchase insufficient funds!")
     }
    
}

console.log(answer);