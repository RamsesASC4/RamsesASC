


function setup() {
    createCanvas(1200, 800);
    background("blue");
    // ellipse(400, 400, 500, 500);
}
var myPoints = 0
var word = ""
var ogString = "Please type the sentences below:"
var userString = 
function draw(){
    textSize(50);
    fill("red");
    text("Please type the sentences below:", 50, 50);

    textSize(30);
    fill("green");
    text("All Star Code is the best ever!", 50, 100);

    textSize(30);
    fill("green");
    text("I am learning so much about code!", 50, 150);

    textSize(30);
    fill("green");
    text("Code is an essential part of technology!", 50, 200);

    textSize(30);
    fill("green");
    text("I am aspiring to become a Software Engineer!", 50, 250);

    textSize(30);
    fill("green");
    text("I hope more diverse people enter the tech industry!", 50, 300);

    textSize(45);
    fill("yellow");
    text("Points:", 775, 750);
}
    
    function keyTyped(){
        word = word + key
        textSize(35)
        fill("pink")
        text(word, 50, 400);
        if (key === "All Star Code is the best ever!") {
        myPoints = myPoints + 10;
        textSize(45);
        fill("yellow")
        text(myPoints, 50, 750);
    } else if (myPoints = myPoints -1){
        textSize(45);
        fill("yellow")
        text(myPoints, 50, 500);
    }
}
