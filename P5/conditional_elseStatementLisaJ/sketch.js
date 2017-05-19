/* 
conditional_elseStatementLisaJ
Lisa Jiang May 2017
*/

var circX = 300;
var circY = 200;
var circStroke = 125;
var circR = 2;// changed from 255 to 2 for purple
var circG = 0;
var circB = 150;// changed from 0 to 150
var circSize = 25;//decreased to 25
var recX = 100;
var recY = 20;// changed starting point from bottom to top
var recStroke = 35;
var recCol = 100;//lightened color to 100
var recSize = 150;//Increased size to 150
var canvBG = 225;
var speed = 2;
var alph = 125;



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
  
  circX = circX - speed;// changed direction
  recY = recY + speed;//changed the appearance of animation of moving in opp direction
  
  if (circX < width) {
    circSize += 0.5;
    
  } else {
    
    if(circX > width) {
        speed = speed *-1;
        circSize *= -1;
    }
  }
}