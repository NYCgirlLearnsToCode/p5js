/*
multipleObjects_ObjectLiteral
Lisa Jiang May 2017
*/


var circle = {
  x: 200,
  y: 200,
  diam: 50,
  r: 255,
  g: 123,
  b: 25
}

var rectangle = {
  x: 100,
  y: 100,
  diam: 75,
  r: 15,
  g: 33,
  b: 225
}



function setup() {
    createCanvas(400, 400);  
}

function draw() {
  background(34, 123, 218);
  noStroke();
  fill(circle.r, circle.g, circle.b);
  ellipse(circle.x, circle.y, circle.diam, circle.diam);
  fill(rectangle.r, rectangle.g, rectangle.b);
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);
}