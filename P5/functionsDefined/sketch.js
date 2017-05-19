/*
Defining functions. Points are drawn across x axis of the canvas. Functions to move and display are 
created and called.

Lisa Jiang May 2017. 
*/

// create an object, blip using object literal notation syntax.
// this could be simplified by using a constructor function to make a template that will
// create as many blip objects as desired.
var blip = {
	x: 0,
	y: 100,
	xspeed: 4,
}

var blip2 = {
	x: 0,
	y: 200, // the y position is the same as blip3 so that they intersect.
	xspeed: 4,
}

var blip3 = {
	x: 600,
	y: 200,
	xspeed: 4,
}

var blip4 = {
	x: 600,
	y: 300,
	xspeed: 4,
}


function setup() {
	createCanvas(600, 400);
	background(0);
}

function draw() {
	move(); // call the defined move() function.
	display(); // call the defined display() function.
}

// define a function using the keyword function. 
// move function()
function move() {
	blip.x = blip.x + blip.xspeed;
	blip2.x = blip2.x + blip2.xspeed;
	blip3.x = blip3.x - blip3.xspeed; // use - to move the x position to the left.
	blip4.x = blip4.x - blip4.xspeed;
}
// display function()
function display() {
	strokeWeight(2);
	stroke(255, 0, 255);
	// an array and for loop could be used so point does not have to be called repeatedly.
	point(blip.x, blip.y);
	point(blip2.x, blip2.y);
	point(blip3.x, blip3.y);
	point(blip4.x, blip4.y);
}