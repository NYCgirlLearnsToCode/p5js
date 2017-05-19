/*
Basic P5 sketch.
Created by Lisa Jiang May 2017.
*/
// Every P5 sketch (program) requires at least 2 functions: function setup() and function draw ()
// function is a function indicator keyword

function setup() { //parenthesis holds arguements or parameters
  createCanvas(400,400); // the createCanvas() function sets the canvas sz, set at 400x 400 px
}

function draw() {//brackets contain statements
  background(0,3,200);//background() function sets bg color 
  fill(180);// filled with color code for grey inside the shapes
  strokeWeight(4);//length thickness of 4 for the shapes
  triangle(90,40,160, 150, 100, 300);
  stroke('green');//stroke line is green
  ellipse(300,300, 50, 50)
  ellipse(300,100, 50,50)
}