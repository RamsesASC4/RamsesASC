
var playerChoice = "s";
var choices = ["r", "p", "s"];
var compChoice = choices[Math.floor(Math.random()*3)];

if (playerChoice == compChoice){
    console.log("It's a tie!");
}
if (playerChoice == "r" && compChoice == "p"){
    console.log("Rock loses to paper. You lose!");
}
if (playerChoice == "r" && compChoice == "s"){
    console.log("Rock beats scissor. You win!");
}
if (playerChoice == "p" && compChoice == "s"){
    console.log("Scissor beats Paper. You Lose!")
}
if (playerChoice == "s" && compChoice == "r"){
    console.log("Rock beats paper. You Lose")
}