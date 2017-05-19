/*
tabOrganizationWithObjects
Lisa Jiang May 2017
*/
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