/*
Example of drawn shapes moving in opp directions across canvas window and then comes back using variables, incrementors and conditonal logic (if statement) in the draw () looop.
Lisa Jiang May 2017.
*/

var circX = 200;// starting point of circle is center of canvas
var circY = 200;
var circStroke = 125;
var circR = 255;// changed circle color from 55 blue to 255 pink
var circG = 135;
var circB = 225;
var circSize = 75;
var recX = 100;
var recY = 300;// starting point is at the bottom of the canvas
var recStroke = 35;
var recCol = 0;
var recSize = 100;// increased recSize from 75 to 100
var canvBG;
canvBG = 125, 55, 255;
var speed = 2;



function setup(){
  createCanvas(400, 400);// (x width, y height)
  }

function draw() {
  background(canvBG);
  stroke(circStroke);
  fill(circR, circG, circB);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  ellipse(circX + 50, circY - 75, circSize, circSize);//the circle above and closer to the right side of the screen
  fill(circR, circG, circB, 135);
  
  
  circX = circX + speed;// in the draw () loop, this statement will increment the value of circX by 2.
              // this gives the appearance of animation when the circle is drawn +3 to the right each time it is looped. moves to the right
              //incrementor + takes a value, adds it to another and assigns it to the variable
  
  
  
  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize);
  
  recY = recY - speed;
  
  if(circX > width || circX < 0) {//An if statement, condition = if circX is greater than width or circX is less than 0
                    //if condition is true execute code between curly braces,circ moves left when x > 400 left , right when x < 0 
                    //if not, code will not be executed
    speed = speed *-1;// speed of circle will be a negative # after being multipled by -1 because x starts on positive 200
                  //the speed of rect is also affected because speed var is global and used by both circ and rect speed equations
                //rect moves up and down x axis
  }
}
  