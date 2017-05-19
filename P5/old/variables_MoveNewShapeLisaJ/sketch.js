/* 
Ellipses move sketch
Created by Lisa Jiang May 2017. 

*/
var rectA = 50;// starting point of rectangle is at the bottom of canvas
var rectB = 50;// starting point of canvas is bottom of canvas
var rectWidth= 55; //rectangle width
var rectHeight= 55;// rectangle height
var rectStroke = 51;//black stroke
var rectR = 225;// RGB red value
var rectG = 135;// RGB green value
var rectB = 225;// RGB blue value

canvBG = 2, 0, 0;//canvas background is black

// every P5 sketch (program) requires at least two functions: function setup() and function draw()
// function is a keyword that P5 recognizes as a funcition indicator
// setup() takes care of initializing the program and runs once.
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(400, 400); // the createCanvas() function sets canvas size
}

// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
  background(canvBG);
  stroke(rectStroke);
  fill(rectR, rectG, rectB);// pink
  stroke(rectStroke);
 rect(rectA, rectB, rectWidth, rectHeight);
  
  
  rectA = rectA + 1; //each time the function loops, 1 is added to x coordinate varA = 50 hence it appears to move across the screen
 
}