var canvas_width = 800;
var canvas_height = 800;
var branch_length = 200;
var angle_randomness = 0.05;
var max_step = 10;


function setup(){ 
  createCanvas(canvas_width,canvas_height); 
  noLoop(); 
} 

function draw(){ 
  background(255);    
  strokeWeight(10); 
  translate(canvas_width/2,canvas_height-20);
  stroke(255, 0, 0);
  branch(0); 
} 

function branch(depth){ 
  if (depth < max_step) { 
    line(0,0,0,-canvas_height/max_step); // draw a line going up
    { 
      translate(0,-canvas_height/max_step); // move the space upwards
      // TODO, try to decomment this line and see how the randomness affect the construction
      //rotate(random(-angle_randomness,angle_randomness));  // random wiggle

      if (random(1.0) < 0.6){ // branching   
        rotate(0.3); // rotate to the right
        scale(0.8); // scale down
        
        push(); // now save the transform state
        branch(depth + 1); // start a new branch!
        pop(); // go back to saved state
        
        rotate(-0.6); // rotate back to the left 
        
        push(); // save state
        branch(depth + 1);   // start a second new branch 
        pop(); // back to saved state        
     } 
      else { // no branch - continue at the same depth  
        branch(depth);
      } 
    } 
  }
} 


function mouseReleased(){ 
  redraw();  
}

/* http://alpha.editor.p5js.org/mtchl/sketches/ryyW2U5Fx */