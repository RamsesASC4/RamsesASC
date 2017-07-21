var x = 375;
var y = 675;
var bullets = [];
// var aliens = 

var alien1 = {
    x: 50,
    y:50,
    shown: 0
}

var alien2 = {
    x: 90,
    y: 50,
    shown: 0
}

var alien3 = {
    x: 130,
    y: 50,
    shown: 0
}

var alien4 = {
    x: 170,
    y: 50,
    shown: 0
}

var alien5 = {
    x: 210,
    y: 50,
    shown: 0
}

var alien6 = {
    x: 250,
    y: 50,
    shown: 0
}


// var color = ["red", "blue"]
// var rColor = random(color)
function setup() {
    createCanvas(800,800);
    
    
    
}


function draw() {
    var c = ('#0f0');
    
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 10;

    } if (keyIsDown(RIGHT_ARROW)) {
        x = x + 10;
    }
    clear();
    background("black");
    var aliens = [alien1, alien2, alien3, alien4, alien5, alien6]
for (var i = 0; i < aliens.length; i++) {
    fill("red");
    if(aliens[i].shown === 0) {
        ellipse(aliens[i].x, aliens[i].y, 25, 25);
    }
    // for(var i=0;i<bullets.length;i++){
    //     bullets[i][1] -= 5
    //     rect(bullets[i][0], bullets[i][1], 10, 10);
    //     if(bullets[i][1] <= 0){
    //         bullets.splice(i,1)
    //     }
    // }
}


    fill(c);
    rect(x, y, 70, 20);

    var x1 = 50;
    var y1 = 50;
    var spawn = x + 33

    fill("red");
    ellipse(50, 50, 25, 25);
    ellipse(90, 50, 25, 25);
    ellipse(130, 50, 25, 25);
    ellipse(170, 50, 25, 25);
    ellipse(210, 50, 25, 25);
    ellipse(250, 50, 25, 25);

    // fill("white");
    // ellipse(50, 90, 25, 25);
    // ellipse(90, 90, 25, 25);
    // ellipse(130, 90, 25, 25);
    // ellipse(170, 90, 25, 25);
    // ellipse(210, 90, 25, 25);
    // ellipse(250, 90, 25, 25);

    // fill("blue");
    // ellipse(50, 130, 25, 25);
    // ellipse(90, 130, 25, 25);
    // ellipse(130, 130, 25, 25);
    // ellipse(170, 130, 25, 25);
    // ellipse(210, 130, 25, 25);
    // ellipse(250, 130, 25, 25);
    
    
    fill('#0f0')
    rect(x + 32, y - 19, 10, 20);
    for(var v = 0; v < bullets.length; v++) {
        bullets[v][1] -= 5;
        ellipse(bullets[v][0]+37, bullets[v][1] +624, 10, 10)
    }
}


function keyPressed(){
    if(keyCode === 32){
        bullets.push([x, +35, y]);

    }
}
