const PI = 3.1415926535;
var angle = PI / 4;
var decrease_percent = 0.7;
var branch_length = 200;
var slider;

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);
  slider = createSlider(0, PI * 2, 0, 0.1);
}

function draw() {
  background(50);
  stroke(255);
  angle = slider.value() * sin(millis() * 0.001);
  translate(width / 2, height);
  branch(branch_length);
}

function branch(len) {
  strokeWeight(len * 0.1);
  var hue = map(len, 0, branch_length, 0, 255)
  stroke(hue, 255, 255);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 8) {
    push();
    rotate(angle);
    branch(len * decrease_percent);
    pop();

    push();
    rotate(-angle);
    branch(len * decrease_percent);
    pop();
  }
}