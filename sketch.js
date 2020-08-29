// Daniel Shiffman   https://thecodingtrain.com/CodingChallenges/074-clock.html üzerinden denemeler


var cnv;

var x = 0;
var bekle = 1000;
var p=-10;

var timer;
var counter = 0;
var interval;
var button;

var pbekle;

var sound;
var stereo = 0.4;

var k = 2.5;

function preload(){
    sound = loadSound('https://raw.githubusercontent.com/baranyildizz/tik/master/tik.mp3');

}


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  background(0);
  angleMode(DEGREES);
  sound.setVolume(0.2);
}

function windowResized() {
  centerCanvas();
}

function mouseClicked() {
//  sound.play();
let fs = fullscreen();
fullscreen(!fs);
doTimer();
}
function doTimer() {
  if (!interval) {
    interval = setInterval(timeIt, bekle);
  } else {
    clearInterval(interval);
    interval = false;
  }
}
function timeIt() {
  sound.play();
//  PlaySound();
//  timer.html(counter);
  //line(0,0,counter,counter);
  counter++;
  sound.pan((((bekle%2)*2)-1)*stereo);
//  sound.setVolume(((bekle%2)+1.4)/4);
/*  if((bekle%5)==0){
sound.setVolume(1);
  }else{
sound.setVolume(0.1);
  }
*/
  if (bekle <= 50) {
  //  clearInterval(interval);
  //  interval = false;
    bekle = 60;
  }else{
    clearInterval(interval);
    interval = setInterval(timeIt, bekle);
    bekle += 7;
  }
}



function draw() {
  background(0);
  translate(300, 300);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(12);
  stroke(255, 100, 150);
  noFill();
//  sc= counter%60;
  let secondAngle = map(counter%60, 0, 60, 0, 360);
  //arc(0, 0, 200, 200, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 150, 150, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
//  arc(0, 0, 100, 100, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(230,140,200);
  line(0, 0, 100*k, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(100);
  line(0, 0, 75*k, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(50);
  line(0, 0, 50*k, 0);
  pop();

  stroke(255);
  point(0, 0);
}
