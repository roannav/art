function setup() {
  createCanvas(300, 300);
  strokeWeight(0.1);
}

let a = 0;
const NUM_LINES = 256;
const SCALE = 100;

function draw() {
  background('#111');
  translate(width/2,height/2);
  for( let i = 0; i<NUM_LINES; i++) {
    stroke('#ff' + (NUM_LINES - i).toString(16) + i.toString(16));
    b = a+i;
    x1 = (sin(b/20))**3 * SCALE;
    y1 = (cos(b/20))**3 * SCALE;
    x2 = (sin(b/25))**3 * SCALE;
    y2 = (cos(b/25))**3 * SCALE;
    line(x1, y1, x2, y2);
  }
  a+=0.2;
}

