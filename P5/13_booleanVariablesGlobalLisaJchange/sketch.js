/*
13_booleanVariables
Lisa Jiang May 2017
*/
var on = false;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  if(on){
    background(255);//changed to white bg if square is clicked
  } else{
    background(0);//black bg if square isn't pressed
  }

    stroke(255);
    strokeWeight(4);
    noFill();
    
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){//if clicked within given defined space execute code block
      fill(0, 0 , 150);//changed to square filled with purple when clicked
    }
    //rectMode(CENTER);//X &Y IS rect's center point, does not need to be changed to ellipseMode(center)bc ellipse' center default is x,y
    ellipse(300, 200, 100, 100);//draws square
}
function mousePressed(){
  if (mouseX > 250 && mouseX <350 && mouseY >150 && mouseY <250){
    on = !on;
  }
}