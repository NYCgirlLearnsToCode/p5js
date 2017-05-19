/*
Using an array to display text
modified Dawn Hayes' code
Lisa Jiang May 2017
*/
var array = ["IF", "YOU", "want", "it", "BAD", "enough,", "you’ll", "Make", "It","Happen"];//changed array name from playlist to array, all the words,varied text capitalization for more impact
function setup() {
  		createCanvas(1200, 800);
  		background(0,0,0);

  		for(i= 0; i< 10; i++){//for statement iterates through array, initialization, condition of when i< # of items in array, increment through array
  			stroke(255);
  			fill(255);
  			textSize(30);
  			text(array[i],  i * 100 + 100, i * 50 + 100);// array shows text by index,experiemented with values to center text diagonally across pg,orig equations were i * 100 + 50, i * 100 + 50
  		}
}

function draw() {
  
}