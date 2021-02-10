// let's save those positions to a snowflake array
// and let's tell to the particle when to stop

let current;
let snowflake = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    current = new Particle(width / 2, 0);
}

function draw() {
    translate(width / 2, height / 2);
    rotate(PI / 6);
    background(0);

    current.update();

    for (let i = 0; i < 6; i++) {
        rotate(PI / 3); // important! we need to rotate again.
        current.show();
        // show all the particles collected
        for (let p of snowflake) {
            p.show();
        }

        push();
        scale(1, -1);
        current.show();
        // show all the particles collected
        for (let p of snowflake) {
            p.show();
        }
        pop();
    }

    // If I finished (the particle went down until the very end)
    // save the particle in the array and create a new one
    if (current.finished()) {
        snowflake.push(current);
        current = new Particle(width / 2, 0);
    }

}
