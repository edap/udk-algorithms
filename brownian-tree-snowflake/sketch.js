// Coding Challenge 127: Brownian Motion Snowflake
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// https://youtu.be/XUA8UREROYE

// Think to exagon, each slice divided in 2
// https://youtu.be/XUA8UREROYE?t=161
// then run some random movement along the axis

let current;

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height / 2, 0);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(PI / 6);
  background(0);
  current.update();

  // 1) let's show it
  current.show();

  // // 2) Let's show it and show it's reflection
  // current.show();
  // push();
  // // this scale does a trick! scale by negative values
  // // means reflection
  // scale(1, -1);
  // current.show();
  // pop();

  // // 3 let's show this reflected axis 6 times
  // for (let i = 0; i < 6; i++) {
  //   rotate(PI / 3);
  //   current.show();
  //   push();
  //   // this scale does a trick! scale by negative values
  //   // means reflection
  //   scale(1, -1);
  //   current.show();
  //   pop();
  // }
}
