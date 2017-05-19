/*
https://vimeo.com/channels/learningp5js/139587730
*/

function setup() {
  //var angle = degrees(PI/2);
  // console.log(angle);
  
  var km = milesToKm(26.3);
 console.log(km);
  
  var km2 = milesToKm(100);
  console.log(km2);
  
  // console.log(milesToKm(90));
}

function milesToKm(miles) {
  var km = miles * 1.6;
  return km;
}