const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner

function fillBackground( color) {
  ctx.fillStyle = color;
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

function outlineCircle( _x, _y, _radius, _color) {
  ctx.strokeStyle = _color;
  ctx.beginPath();
  ctx.arc( _x, _y, _radius, 0, 2*Math.PI);
  ctx.closePath();
  ctx.stroke();
}

function fillCircle( _x, _y, _radius, _color) {
  ctx.fillStyle = _color;
  ctx.beginPath();
  ctx.arc( _x, _y, _radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

function outlineRect( _x, _y, _w, _h, _color) {
  ctx.strokeStyle = _color;
  ctx.beginPath();
  ctx.strokeRect(_x, _y, _w, _h);
  ctx.closePath();
}

function fillRect( _x, _y, _w, _h, _color) {
  ctx.fillStyle = _color;
  ctx.beginPath();
  ctx.rect(_x, _y, _w, _h);
  ctx.closePath();
  ctx.fill();
}

// _x, _y is the right angle corner
// _w, _h are the length of the legs
function outlineRightTriangle( _x, _y, _w, _h, _color) {
  ctx.strokeStyle = _color;
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  ctx.lineTo(_x+_w,_y);
  ctx.lineTo(_x,_y-_h);
  ctx.closePath();
  ctx.stroke();
}

function fillRightTriangle( _x, _y, _w, _h, _color) {
  ctx.fillStyle = _color;
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  ctx.lineTo(_x+_w,_y);
  ctx.lineTo(_x,_y-_h);
  ctx.closePath();
  ctx.fill();
}

function drawCirclesGrowing( _x, _y, _initial_radius, _color, _num_circles) {
  ctx.strokeStyle = _color;
  for( var i=1; i<= _num_circles; i++) {
    outlineCircle( _x, _y, i*_initial_radius, _color);
  }
}

function draw() {
  fillBackground("#EEE");
  outlineCircle( 10, 10, 10, "red");
  fillCircle( 30, 10, 10, "red");
  drawCirclesGrowing( 100, 100, 10, "blue", 5)
  outlineRect(50,5,50,10,"cyan");
  outlineRect(250,5,50,10,"cyan");
  fillRect(50,20,50,10,"cyan");
  fillRect(250,20,50,10,"cyan");
  outlineRightTriangle( 120, 20, 10, 20, "#00F");
  fillRightTriangle( 131, 21, 12, 22, "#00F");
}

draw()
// call the draw() function every 50 milliseconds
//setInterval(draw, 50);
