/* 
demonstrates color array. 
Lisa Jiang May 2017

*/


var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];


function setup() {
	createCanvas(1200, 800);
	background(255, 0, 0);

	for (i = 0; i < 8; i++) { // use a for loop() to go through the array by index starting with 0.
		// console.log(playlist[i]); // log the list to the console as a check if needed.
		stroke(255);
		fill(255);
		textSize(38); 
		text(playlist[i], i * 100 + 50, i * 100 + 50); // print each string by index, followed by spacing and location of the text.
	}
}

// nothing needs to be drawn here.
function draw() {

}

