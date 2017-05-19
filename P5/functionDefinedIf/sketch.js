/*
Defining functions. Points are drawn across the canvas. Functions to move, bounce and display are 
created and called.

Created by Lisa Jiang May 2017. 
*/

// create an object, blip using object literal notation syntax.
var blip = {
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3,
}

function setup() {
	createCanvas(600, 400);
	background(0);
}

function draw() {
	move(); // call the defined move() function.
	bounce(); // call the defined bounce() function.
	display(); // call the defined display() function.
}

// define a function using the keyword function. 
//bounce function
function bounce() {

	if (blip.x > width || blip.x < 0) { // edge detection
		blip.xspeed = blip.xspeed * -1; // change direction
		background(random(255), random(255), random(255)); // random background colors based on the point's x position
	}

	if (blip.y > height || blip.y < 0) {
		blip.yspeed = blip.yspeed * -1;
		background(random(255), random(255), random(255)); // random background colors based on the point's y position
	}

}

// move function()
function move() {
	blip.x = blip.x + blip.xspeed;
	blip.y = blip.y + blip.yspeed;

}

// display function()
function display() {
	strokeWeight(2);
	stroke(255);
	point(blip.x, blip.y);
}