// Credits:
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE


// Intro to object, contstructor and classes. Create the circle class and fill an array.
// Good reference to OOP https://processing.org/tutorials/objects/, p5 https://p5js.org/examples/objects-objects.html
// Use the class to draw an array of circles
// 2, add the grow function to the Cirlce
// 3, check when to grow and when to stop. Exaplin the function "edges"
// intro to the noLoop trick in the draw call, it stops after a while
// draw 5 circles at time, with 20fps
// I do not want to draw circle on top of each other, and I do want to stop them to grow if they touch another circle.
// 1 Improve the newCircle function, do not draw on top of each other.
// 4 check for collision with other circles, explain how, using the distance and the radius

const circles = [];
const maxAttempts = 30;
let nCirclesPerDrawCall = 5;
//const maxNumberOfCircles = 60;

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    // Add Growth
    this.growing = true;


    this.grow = function () {
        if (this.growing) {
            this.r += 1;
        }
    };

    this.show = function () {
        stroke(255);
        noFill();

        strokeWeight(2);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };

    this.edges = function () {
        return (
            this.x + this.r >= width ||
            this.x - this.r <= 0 ||
            this.y + this.r >= height ||
            this.y - this.r <= 0
        );
    };
}

function setup() {
    createCanvas(640, 360);
    let newC = newCircle();
    circles.push(newC);
}

function draw() {
    background(0);
    frameRate(20);


    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        // 2 let's stop to grow when it touches the border
        // if (circle.growing) {
        //     if (circle.edges()) {
        //         circle.growing = false;
        //     } else {
        //         circle.grow();
        //     }
        // }

        circle.show();
        // 1 here it grows
        circle.grow();
    }
}

function newCircle() {
    let x = random(width);
    let y = random(height);

    return new Circle(x, y);
}