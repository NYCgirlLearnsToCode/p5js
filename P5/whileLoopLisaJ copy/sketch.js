/*
whileLoopLisaJ
Lisa Jiang May 2017
*/


function setup() {
    createCanvas(600, 600);
}

function draw() {
      background(0);//black background

      //var y = 0;
      var y = 0;//initializes at 0
      while (y <=height) { //condition is y<=height      
        stroke(0);
        fill(random(255));//randomizes fill color 0-255 range to create flicker effect
        //rect(200, y, 50, 50);
        ellipse(100, y, 50, 50);// draws circles on left side of canvas
        //y = y + 50;
        y = y + 100;// draws circle with y value spaced down 100, incrementor
      }

      //for(y = 0; y<= height; y += 50){
        for(y = 0; y<= height; y += 100){//intializaes at 0, condition is y<= height, incrementor is y+=100
        stroke(0);
        fill(random(255));//randomizes fill color 0-255 range to create flicker effect
        ellipse(500, y, 50, 50);// draws circles on right side of canvas
      }
          if(mouseIsPressed){
            fill(0,0,255);//blue
            textSize(100);
            text('Hello!',170,300);//says hello on blue in middle of page
      }

}