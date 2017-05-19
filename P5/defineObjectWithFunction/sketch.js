/*
defineObjectWithFunction

modified code by Dawn Hayes
Lisa Jiang May 2017. 
*/

// create an object, blip using object literal notation syntax.
// this could be simplified by using a constructor function to make a template that will
// create as many blip objects as desired.
var blip = {
	x: 600,//changed from 0 -> 600 to change starting pt from left side of canvas to right side
	y: 100,
	xspeed: 4,
}

var blip2 = {
	x: 0,
	y: 200, // the y position is the same as blip3 so that they intersect.
	xspeed: 4,
}

/*var blip3 = { removed intersecting blip line 3
	x: 600,
	y: 200,
	xspeed: 4,
}*/

var blip4 = {
	x: 600,
	y: 300,
	xspeed: 4
}

var circle ={// declared circle object 
  x: 300, //x coordinate
  y: 300,// y coordinate
  changeColor: function(){//function called,ellipse randomly changes color
    fill(random(255),random(255),random(255));//color rgb values 0-255 range
  } //functionname: function
/* function mouseClicked(){
      if(value ==0){
      value = 0;
      }
  }*/
}

//var on = false;


function setup() {
	createCanvas(600, 400);
	background(0);
}

function draw() {
	move(); // call the defined move() function.
	display(); // call the defined display() function.
	circle.changeColor();
}

// define a function using the keyword function. 
// move function()
function move() {
  //ellipse(circle.x, circle.y, 100, 100); 
	blip.x = blip.x - blip.xspeed; // changed + --> - to change animation of blip to move towards the left
	blip2.x = blip2.x + blip2.xspeed;
	//blip3.x = blip3.x - blip3.xspeed; // use - to move the x position to the left.
	blip4.x = blip4.x - blip4.xspeed;
	
	if (blip.x > width || blip.x < 0) { // when blip.x line touches edge of canvas (edge detection)
		blip.xspeed = blip.xspeed * -1; // change direction
		background(random(255), random(255), random(255)); // random background colors based on the point's x position
	}
	if (blip.x > width || blip.x < 0) { // edge detection
		blip2.xspeed = blip2.xspeed * -1; // change direction
		background(random(255), random(255), random(255)); // random background colors based on the point's x position
	  ellipse(circle.x, circle.y, 100, 100);// draw circle when blip hits the edge  
	  /*function mousePressed(){
      if (mouseX > 250 && mouseX <350 && mouseY >150 && mouseY <250){
    on = !on;
      }  
  }*/
  
	}//only see the first 2 lines bc an if statement for this change direction effect was not created for  blip4 line
}

// display function()
function display() {
	//strokeWeight(2);
	stroke(255, 255, 255);//changed rgb values to be white instead of pink
	// an array and for loop could be used so point does not have to be called repeatedly.
	point(blip.x, blip.y);
	point(blip2.x, blip2.y);
	//point(blip3.x, blip3.y);
	point(blip4.x, blip4.y);
	

}
