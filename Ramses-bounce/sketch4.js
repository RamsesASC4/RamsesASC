var x = 50
var y = 50
var vy = 10
var vx = 15


function setup() {
    createCanvas(300, 300);
    
}


function draw(){
    background("blue")
    fill("red")
    ellipse(x, y, 25, 25);
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

