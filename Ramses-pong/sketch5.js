var x = 50
var y = 50
var vy = 10
var vx = 15


function setup() {
    createCanvas(300, 300);
    
}
// if obj1 < obj2 postion+width or position+height

var xK = 100
var yK = 285
if (x < xK){
    x <=300+25
}
function draw(){
    background("blue")
    fill("red")
    ellipse(x, y, 25, 25);
    fill("red")
    rect(xK, yK, 100, 40);

if ( x >=300-25){
    vx = -vx;
} else if ( x <= 0 +25) {
    vx = -vx;
       
}
x = x +vx;

// if ( y >= 300-25){
//     vy = -vy;
// } else if (y <= 0 + 25) {
//     vy = -vy;
// }
y = y + vy
}
function keyTyped(){
        if (key === "j"){
            xK = xK - 10;
        } else if (key === "k"){
            yK = yK +10;
        }
    }

