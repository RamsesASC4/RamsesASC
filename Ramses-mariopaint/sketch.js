function setup(){
    createCanvas(1200, 700);
    // ellipse (100, 100, 50, 50);
    background("red");

    function mouseDragged(){
     ellipse (mouseX, mouseY, random(100), random(100))
    }

}
