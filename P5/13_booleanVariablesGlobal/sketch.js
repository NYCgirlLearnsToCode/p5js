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
    background(0, 255, 0);//green bg when square is clicked
  } else{
    background(0);//black bg if square isn't pressed
  }

    stroke(255);
    strokeWeight(4);
    noFill();
    
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
      fill(255, 0 , 200);//square is filled with pink when clicked
    }
    rectMode(CENTER);//X &Y IS rect's center point
    rect(300, 200, 100, 100);//draws square
}
function mousePressed(){
  if (mouseX > 250 && mouseX <350 && mouseY >150 && mouseY <250){
    on = !on;
  }
}