// Daniel Shiffman'in (https://thecodingtrain.com/CodingChallenges/074-clock.html) kodu üzerinden zaman buken saat denemesi.

var cnv;

var x = 0;
var bekle = 1000;
var adim=7;

var timer;
var counter = 0;
var interval;

var sound;
var stereo = 0.5;

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
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(0);
  angleMode(DEGREES);
  sound.setVolume(0.2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function mouseClicked() {
//sound.play();
//var fs = fullscreen();
//fullscreen(!fs);
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
//PlaySound();
//timer.html(counter);
//line(0,0,counter,counter);
  counter++;
  sound.pan((((bekle%2)*2)-1)*stereo);
//  sound.setVolume(((bekle%2)+1.4)/4);
/*  
  if((bekle%5)==0){
        sound.setVolume(1);
  }else{
    sound.setVolume(0.1);
  }
*/
  bekle = bekle + adim;
  if (bekle <= 600) {
//  clearInterval(interval);
//  interval = false;
    adim = adim*-1;
  }else if(bekle>=2000){
//  clearInterval(interval);
//  interval = setInterval(timeIt, bekle);
    adim = adim*-1;
  }
  clearInterval(interval);
  interval = setInterval(timeIt, bekle);
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(12);
  stroke(255, 100, 150);
  noFill();
//sc= counter%60;
  let secondAngle = map(counter%60, 0, 60, 0, 360);
  //arc(0, 0, 200, 200, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 150, 150, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
//  arc(0, 0, 100, 100, 0, hourAngle);

  push();
  stroke(20);
  for(i=6;i<=360;i=i+6){
    strokeWeight(2);
    if(i%30==0){
        strokeWeight(4);
    }
    rotate(6);
//  line(55*k,0,100*k,0);
//  line(0,0,100*k,0);
    point(100*k, 0);
    }
  pop();

  push();
  rotate(secondAngle);
  stroke(230,140,200);
  line(0, 0, 100*k, 0);
  //rotate(-90);
  fill(20);
  noStroke();
  text(bekle + ' ms', 105*k, 5);
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
