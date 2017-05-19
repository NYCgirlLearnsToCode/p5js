/*
Heavenly Circle - Circle moves upward and changes color after passing canvas midpoint
Driver: Lisa
Typer: Nathan
*/

var circle = { // circle object
  x: 300, // x coordinate starting point
  y: 300, // y coordinate starting point
  d: 50, //  diameter of circle
  colorChange: function() { // function changes circle color
    fill(random(255), random(255), random(255));
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('white'); // added background so the circle does not appear to stretch istead of move upwards
  fill(0); // initial color of circle
  ellipse(circle.x, circle.y, circle.d); // draws the circle
  circle.y --; // shorthand decrements the circle by 1 to create the apperance of the circle moving upwards
  
  if (circle.y <= 200) { // when circle.y is less than equal to 200 on the y axis, execute code below
    // circle.y ++;
    circle.colorChange();  // the if statement called the colorChange function to change the circle color
    ellipse(circle.x, circle.y, circle.d); // this ellipse function is needed to draw the circle with the color change
  }
}