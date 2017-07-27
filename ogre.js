var PlayerHP = 100;
var PlayerGold = 100;
var PlayerDefeated = 0;
var imgHeight = 200;
var imgWidth = 300;


function setup() {
    $("body").append("<h1>Hello</h1>");
    $("body").append("HP: " + PlayerHP + " Gold: " + PlayerGold + " Player Defeated");
    $("body").append("<img src= 'https://unsplash.it/'" + imgHeight + "'/300'>" );
}


$(document).ready(setup);