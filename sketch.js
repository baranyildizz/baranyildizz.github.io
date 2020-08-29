var x = 0;
var bekle = 1000;

var timer;
var counter = 0;
var interval;
var button;

var pbekle;

var sound;



function setup() {
  createCanvas(200, 200);

  timer = createP('timer');
  pbekle = createP('pbekle');

  button = createButton('start timer');
  button.mousePressed(loaded);
    sound = loadSound("nt.mp3");
//    setVolume(1.0);
}

function loaded() {
  sound.play();
  sound.loop();
}

function doTimer() {

  if (!interval) {
    interval = setInterval(timeIt, bekle);
    button.html('stop timer');
  } else {
    clearInterval(interval);
    interval = false;
    button.html('start timer');

  }
}

function timeIt() {
//  sound.play();
//  PlaySound();
  timer.html(counter);
  line(0,0,counter,counter);
  counter++;
  bekle -= 100;
  if (bekle == 0) {
    clearInterval(interval);
    interval = false;
    bekle = 1000;
    button.html('start timer');
  }else{
    clearInterval(interval);
    interval = setInterval(timeIt, bekle);

  }
}

function draw() {
  pbekle.html(bekle);
}
