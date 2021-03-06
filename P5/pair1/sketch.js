/* 
Driver Eli
Typer Lisa J
*/

var circX = 200; // starting point
var circY = 200;
var circStroke = 125;
var circR = 55;
var circG = 135;
var circB = 225;
var circSize = 75;
var canvBG;
canvBG = 125, 55, 255;
var speed = 2;



function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(canvBG); //made bg
  stroke(circStroke); //circle thickness
  fill(circR, circG, circB); //circle color
  stroke(circStroke); // circle border color
  ellipse(circX, circY, circSize, circSize); //this makes a circle
  ellipse(circX + 50, circY - 75, circSize, circSize); // by adding +  50 and -75, the position of the ellipse is offset against the other.
  fill(circR, circG, circB, 135);

  circX = circX + speed; //gives appearance of animation by drawing circle 
  if (circX > width || circX < 0) {
    speed = speed * -1; //reversed direction bc negative number on x axis
    circStroke = circStroke - 100;
    circR = random(255); //added this first & thought it would change the whole color
    circG = random(255);
    circB = random(255);
    //	ellipse(circStroke); 						
  } // in this case, the y position is only reversed if it is less than 0. 
}