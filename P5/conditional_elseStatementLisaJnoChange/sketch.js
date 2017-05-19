/* 
conditional_elseStatementLisaJnoChange
Lisa Jiang May 2017
*/

var circX = 200;
var circY = 200;
var circStroke = 125;
var circR = 255;
var circG = 0;
var circB = 0;
var circSize = 75;
var recX = 100;
var recY = 300;
var recStroke = 35;
var recCol = 0;
var recSize = 75;
var canvBG = 225;
var speed = 2;
var alph = 125; // a fourth value in color, fill and background can set the alpha (opacity and transparency).



function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(canvBG);
  stroke(circStroke);
  fill(circR, circG, circB, alph);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  ellipse(circX + 50, circY - 75, circSize, circSize);
  fill(circR, circG, circB, 135);

  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize);

  circX = circX + speed;
  recY = recY - speed;

  if (circX < width) {

    circSize += 0.5; // circle size will increase by 0.5 through each loop.

  } else {

    if (circX > width) {
      speed = speed * -1; // reverse direction of x.
      circSize *= -1; // circle size will decrease by number multiplied by -1 through each loop.

    }

  }

}