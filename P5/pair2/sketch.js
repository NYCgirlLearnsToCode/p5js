/* 
Eli Typer
Lisa Jiang Driver
*/

var recX = 300;
var recY = 20;
var recStroke = 35;
var recSize = 75;
var canvBG = 225;
var speed = 2;
var alph = 125;
var recR = 255;
var recG = 255;
var recB = 255;


function setup() { 
  createCanvas(400, 400); 
}


function draw() { 
  background(canvBG);

  
  stroke(recStroke);
  fill(recR, recG, recB);
  rect(recX, recY, recSize, recSize);
  
  
  recY = recY + speed;
  if (recY > height || recY < 0 ){//if condition is true run code
    speed = speed *-1;//once it hits the top and bottom borders, it changes direction
    recR = random(255); //randomized value to change color
    recG = random(255);//randomized value to change color
    recB = random(255);//randomized value to change color
     
    }

    }
    
  
  
