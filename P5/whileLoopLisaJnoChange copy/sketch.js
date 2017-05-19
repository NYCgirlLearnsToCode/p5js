/*
whileLoopLisaJnoChange
Lisa Jiang May 2017
*/


function setup() {
    createCanvas(600, 400);
}

function draw() {
      background(14, 56, 105);

      var y = 0;
      while (y <= height) {
        stroke(0);
        fill(255);
        rect(200, y, 50, 50);
        y = y + 50;
      }

      for(y = 0; y<= height; y += 50){
        stroke(255);
        fill(0);
        rect(300, y, 50, 50);
      }
}