/*
mousePressed_eventDriven
Background shape's color changes when mouse is pressed
Lisa Jiang 2017
*/

var diam = 200;
var bgCol = 255;
var bgSwitch = 0;

function setup() {
  createCanvas(400,400);
  background(bgCol);
  noStroke();
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, diam, diam);//diam var referenced
}


function draw() {
  

  
  
}
function mousePressed() {//only once bc no conditional statement
  background(bgSwitch);//blck when pressed
  noStroke();
  fill(0,0,255);
  ellipse(width / 2, height / 2, diam, diam);
}
