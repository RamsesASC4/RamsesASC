function rand(num){
    // this is a function 
    // that returns a number between 0 & num
    var randNum = Math.random()*num; //assign random # to randNum
    var result = Math.floor(randNum);
    return result
}
console.log(rand(2));

var myCoin = ["heads", "tails"]

console.log(myCoin[rand(2)]);

var myDice = ["one", "two","three","four","five","six"]
console.log("You rolled a" + myDice[rand(6)])
