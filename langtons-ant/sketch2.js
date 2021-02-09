
let grid;
let x;
let y;
let dir;

let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;

function setup() {
  createCanvas(800, 800);
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2;
  dir = ANTUP;
}

function turnRight() {
  dir++;
  if (dir > ANTLEFT) {
    dir = ANTUP;
  }
}

function turnLeft() {
  dir--;
  if (dir < ANTUP) {
    dir = ANTLEFT;
  }
}

function moveForward() {
  if (dir == ANTUP) {
    y--;
  } else if (dir == ANTRIGHT) {
    x++;
  } else if (dir == ANTDOWN) {
    y++;
  } else if (dir == ANTLEFT) {
    x--;
  }

  // let's keep them on screen
  if (x > width - 1) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y > height - 1) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}

function draw() {
  strokeWeight(1);
  for (let n = 0; n < 100; n++) {
    let state = grid[x][y];
    if (state == 0) {
      turnRight();
      grid[x][y] = 1;
    } else if (state == 1) {
      turnLeft();
      grid[x][y] = 0;
    }

    stroke(color(255));
    // what if you have more states, with more colors?
    if (grid[x][y] == 1) {
      stroke(color(0));
    }
    point(x, y);
    moveForward();
  }
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  }

  // where to go now:
  // New rules are : - At a white square, turn 90° right, change the color of the square to black, move forward one unit 
  // At a black square, turn 90° left, change the color of the square to red, move forward one unit - At a red square, do not turn, change the color of the square to white, move forward one unit