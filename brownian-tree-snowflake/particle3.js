// Coding Challenge 127: Brownian Motion Snowflake
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// https://youtu.be/XUA8UREROYE

class Particle {

    constructor(radius, angle) {
        this.pos = p5.Vector.fromAngle(angle);
        this.pos.mult(radius);
        this.r = 2;
    }

    update() {
        this.pos.x -= 1;
        this.pos.y += random(-3, 3);
    }

    show() {
        fill(100, 200, 255, 150);
        stroke(255, 150);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    // how we do check if a particle intersect with another one?
    // checking the distance.
    intersects(snowflake) {
        let result = false;
        for (let s of snowflake) {
            let d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
            if (d < this.r * 2) {
                result = true;
                break;
            }
        }
        return result;
    }

    finished() {
        return (this.pos.x < 1);
    }
}
