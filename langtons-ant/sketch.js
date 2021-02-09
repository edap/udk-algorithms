// Credits for this code goes to Daniel Shiffman https://www.youtube.com/watch?v=G1EgjgMo48U
// This is going to be very similar to the cellular automata.

// This introduction is really clear https://www.youtube.com/watch?v=NWBToaXK5T0&feature=youtu.be

// Instead to have a grid of cells, we are going to use a canvas of pixels.

let grid;
// this is the ant position. An ant can turn into 2 diretction, left or right. make a step forward, and change the color of the cell that it leaves.
// If the cell was white, it change it to black. If it was black, it changes to white.

// super easy
let x;
let y;

// an ant turns right if it is on a white cells,
// it turns left it is is on a black cell.

// If I increase by one
let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;
let dir;


function setup() {
  createCanvas(400, 400);
  grid = make2DArray(width, height);
  // we position the ant in the middle of the screen
  x = width/2;
  x = height/2;

}

function draw() {
  // draw the ant
  strokeWeight(1);
  point(x, y);

}

// we read the algorithm, we preare a function for each action.
function moveForward(){

}

function turnLeft(){

}

function turnRight(){

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