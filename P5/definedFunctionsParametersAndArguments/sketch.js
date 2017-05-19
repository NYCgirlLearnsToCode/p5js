/*
Demonstrates definition and use of a function with parameters and arguments. 

Lisa Jiang May 2017
*/

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	moon(445, 200, 150); // the moon shape is drawn at the arguments given.

	star(370, 25); // everytime the function is called, the code is executed with the given arguments based on the definition.
	star(50, 175);
	star(115, 35);
	star(25, 44);
	star(100, 17);
	star(215, 235);
	star(418, 293);
	star(525, 370);
	star(175, 350);
	star(235, 115);
	star(444, 325);
	star(317, 200);
	star(535, 315);
	star(293, 218);
}

// a function is defined with the keyword function. 
// any name can be used as long as it is not a reserved/system word.
// it takes values or variables called parameters
// functions should be defined outside of the setup() and draw() loops.
function moon(xloc, yloc, diam) {
	noStroke();
	fill(255, 255, 153);
	ellipse(xloc, yloc, diam); // parameters are passed into ellipse. 
}

function star(xloc, yloc) {
	fill(255);
	ellipse(xloc, yloc, 5);
}