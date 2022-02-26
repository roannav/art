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

/////////////////// DRAWING A SINGLE LINE AND BASIC SHAPE  /////////////////

function drawLine( _x, _y, _x2, _y2, _color, _lineWidth) {
  oldPenColor = ctx.strokeStyle
  ctx.strokeStyle = _color;
  ctx.lineWidth = _lineWidth;
  ctx.beginPath();
  ctx.moveTo(_x, _y);
  ctx.lineTo(_x2, _y2);
  ctx.closePath();
  ctx.stroke();
  // restore pen color
  ctx.strokeStyle = oldPenColor 
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

function outlineTriangle( _x, _y, _x2, _y2, _x3, _y3, _color) {
  ctx.strokeStyle = _color;
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  ctx.lineTo(_x2,_y2);
  ctx.lineTo(_x3,_y3);
  ctx.closePath();
  ctx.stroke();
}

// fills and outlines the triangle
function fillTriangle( _x, _y, _x2, _y2, _x3, _y3, _color) {
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  ctx.lineTo(_x2,_y2);
  ctx.lineTo(_x3,_y3);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = _color;
  ctx.fill();
}

/////////////////////// DRAWING MANY LINES ////////////////////////////////

// _x, _y is the Top Left of the box
// _w, _h is the width and height of the box
// _step is how far apart the lines are (the maximum)
//
// to draw lines over the entire page: 
//   drawLinesFromTopLeft(0,0,CANVAS_WIDTH,CANVAS_HEIGHT, "red", 20)
function drawLinesFromTopLeft( _x, _y, _w, _h, _color, _step) {
  for( var j=_y; j<= _y + _h; j += _step) {
    drawLine( _x, _y, _x + _w, j, _color, 1);
  }
  for( var i=_x + _w; i>=_x; i -= _step) {
    drawLine( _x, _y, i, _y + _h, _color, 1);
  }
}

function drawLinesFromTopRight( _x, _y, _w, _h, _color, _step) {
  for( var j=_y; j<= _y + _h; j += _step) {
    drawLine( _x + _w, _y, _x, j, _color, 1);
  }
  for( var i=_x + _w; i>=_x; i -= _step) {
    drawLine( _x + _w, _y, i, _y + _h, _color, 1);
  }
}

/////////////////////// DRAWING MANY CIRCLES ///////////////////////////////
function drawCirclesGrowing( _x, _y, _initial_radius, _color, _num_circles) {
  ctx.strokeStyle = _color;
  for( var i=1; i<= _num_circles; i++) {
    outlineCircle( _x, _y, i*_initial_radius, _color);
  }
}


// _x, _y, _w, _h:  location and size of the box containing the scene
function hail( _x, _y, _w, _h) {
}


// NOTE: if colors are not updating correctly when strokeStyle() is called,
// then make sure all the beginPath() and closePath() have defined 
// the paths correctly.

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
  drawLine( 150, 10, 200, 10, "#0F0", 5);
  fillTriangle(200,100,220,70,280,120,"orange");
  outlineTriangle(300,100,320,70,380,120,"orange");
  //drawLinesFromTopLeft(0,0,CANVAS_WIDTH,CANVAS_HEIGHT, "red", 20)
  drawLinesFromTopLeft(400,50,100,100, "red", 20)
  //drawLinesFromTopRight(0,0,CANVAS_WIDTH,CANVAS_HEIGHT, "red", 20)
  drawLinesFromTopRight(500,50,100,100, "red", 20)
  
}

draw()
// call the draw() function every 50 milliseconds
//setInterval(draw, 50);
