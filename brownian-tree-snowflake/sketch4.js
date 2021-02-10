// Add a stop function that calls noLoop

let current;
let snowflake = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    current = new Particle(height / 2, 0);
}

function draw() {
    translate(width / 2, height / 2);
    rotate(PI / 6);
    background(0);

    let count = 0;
    // stop
    while (!current.finished() && !current.intersects(snowflake)) {
        current.update();
        count++;
    }

    // If a particle doesn't move we quit
    if (count == 0) {
        noLoop();
        console.log('done');
    }

    snowflake.push(current);
    current = new Particle(height / 2, 0);

    for (let i = 0; i < 6; i++) {
        rotate(PI / 3);
        current.show();
        for (let p of snowflake) {
            p.show();
        }
        push();
        scale(1, -1);
        current.show();
        for (let p of snowflake) {
            p.show();
        }
        pop();
    }
}
