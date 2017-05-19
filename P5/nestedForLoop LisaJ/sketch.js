/*
nested loop that draws rectangles to the canvas

Lisa Jiang May 2017
*/


function setup() {
  createCanvas(600, 400);
  background(0, 64, 135);
}

function draw() {
  strokeWeight(4);
  stroke(255);
  
  for(var i = 0; i <=width; i+= 60){
    for (var j = 0; j <= height; j+= 60){
      fill(mouseX, random(30), mouseY);// changed random to 30 to minimize color range so it flickers slower and doesnt give me 
      rect(i, j, 100, 35);// width changed to 100 for rectangle shape 
      //quad(20, 50, 50, 20, 80, 50, 50, 80);// changed from rect to a diamond shape using quad
      //quad(400,400 , 50, 20, 80, 50, 50, 80)// tried to use a diamond shpe but needs exact x,y values
      //quad(50, 50, 80, 20, 110, 50, 80, 80)
    }
  }
}