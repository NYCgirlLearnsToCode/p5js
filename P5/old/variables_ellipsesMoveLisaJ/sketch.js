/* 
Ellipses move sketch
Created by Lisa Jiang May 2017. 

*/
var circX = 200;
var circY = 200;
var circStroke = 125;
var circR = 55;
var circG = 135;
var circB = 225;
var circSize = 75;
canvBG = 125, 55, 255;
// every P5 sketch (program) requires at least two functions: function setup() and function draw()
// function is a keyword that P5 recognizes as a funcition indicator
// setup() takes care of initializing the program and runs once.
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(400, 400); // the createCanvas() function sets canvas size
}

// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
  background(canvBG);
  stroke(circStroke);
  fill(circR, circG, circB);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  ellipse(circX + 50, circY - 75, circSize, circSize);
  fill(circR, circG, circB, 135);
  
  circX = circX + 3;
  
}