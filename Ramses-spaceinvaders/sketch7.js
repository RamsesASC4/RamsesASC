var x = 375;
var y = 675;

var color = ["red", "blue"]

function setup() {
    createCanvas(800,800);
    
}


function draw() {
    var c = ('#0f0');
    
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 5;

    } if (keyIsDown(RIGHT_ARROW)) {
        x = x + 5;
    }
    clear();
    background("black");
    fill(c);
    rect(x, y, 70, 20);

    fill(random(color))
    ellipse(50, 50, 25, 25)
    ellipse(75, 50, )
}