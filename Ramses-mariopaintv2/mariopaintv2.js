function setup(){
    createCanvas(1200, 700)
    fill("red")
    rect(10, 10, 300, 200)
    fill("blue")
    rect(10, 200, 300, 200)
    fill("yellow")
    rect(10, 400, 300, 200)
    
}


function mousePressed() {

    ellipse(mouseX, mouseY, 10, 200);
  // prevent default
  return false;
}