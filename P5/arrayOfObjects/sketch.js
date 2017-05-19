/*

array of objects.
Lisa Jiang May 2017
*/

var stars = []; // declares an empty array
var moon;


function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 400; i++) { // for loop to iterate through the loop and increment
    stars[i] = { // object array
      x1: random(0, width), // place x position randomly between 0 and width
      y1: random(0, height), // place y position randomly between 0 and width
      display: function() {
        stroke(random(225));
        point(this.x1, this.y1);
      }
    }
  }
  moon = {
    x: 100,
    y: 350,
    diam: 100,
    xspeed: .5,
    yspeed: .5,
  }

  cloud = {
    x: 50,
    y: 150,
    diam: 75,
    col: 255
  }
}


function draw() {
  background(0, 14, 35);
  for (var i = 0; i < stars.length; i++) { //iterate through the stars array
    stars[i].display(); // display each star
  }
  noStroke();
  fill(225, 225, 134);
  ellipse(moon.x, moon.y, moon.diam, moon.diam);

  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) {
    moon.x = moon.x + moon.xspeed;
    moon.y = moon.y - moon.yspeed;
  }

// make a cloud constructor function to replace verbose code
  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

}