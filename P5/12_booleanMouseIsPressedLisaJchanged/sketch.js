/*
12_booleanMouseIsPressed
Lisa Jiang May 2017
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);//black
  stroke(255);//white
  strokeWeight(4);//ellipse stroke weight
  noFill();//circle originally no filll
  
  if(mouseX> 300 && mouseX <400 && mouseY > 200 && mouseY <300){
    if(mouseIsPressed){
      background(0, 0, 255);//changed from turning  green to blue when mouse is pressed
    }
      fill(255, 0, 200);//turns pink when mouse is pressed
  }
      ellipse(400, 250, 100, 100);//changed from squre to circle, circle x is midpoint so had to change x from 300 to 400
  
}