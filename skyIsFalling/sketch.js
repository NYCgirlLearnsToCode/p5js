/*
Sky Is Falling - A circle falls from the top of the canvas and pushes a rectangle down with it
Driver: Nathan
Typer: Lisa
*/

var cir = {//object that holds 2 different data types
  x : 180,
  y : -10,
  d : 50,//diameter of cir
  c : 'black'//color
  
}   
var rec = [150, 400, 50, -200];//array for rectangle


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('deepskyblue');
  fill(cir.c);//cir color
  ellipse(cir.x, cir.y,cir.d);//dot syntax used inside of ellipse function to draw circle 
  fill(cir.c);//reused color value for rect instead of making a new variable 
  //stroke(cir.c); removed stroke because not needed
  rect(rec[0], rec[1], rec[2], rec[3]);//draws rectangle by with array by using the indices
  cir.y ++;//this is the incrementor,shorthand for incrementing the y value of the cir object, makes cir move postively(down) the canvas
  if(cir.y >= 180){//if statement with relational operator to determine when edge of circle appears to meet rect 
    rec[1]++;//increments rectangle as same speed as circle, appears to sink in sync 
    
  }
  
}