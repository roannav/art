const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner

/////////////////// MATH /////////////////////////////////////

// returns [min, max],  both are inclusive.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/////////////////// DRAWING BACKGROUND /////////////////////////////////////

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

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
// Inside the box, draw randomly located circles that are within the 
// specified radii range.
function drawRandomCircles( _x, _y, _w, _h, 
                            _minRadius, _maxRadius, 
                            _fillColor, _outlineColor,
                            _numCircles) {
  ctx.strokeStyle = _outlineColor;
  for( var i=1; i<= _numCircles; i++) {
    radius = getRandomInteger(_minRadius, _maxRadius);
    x = _x + radius + Math.floor(Math.random() * (_w - 2 * radius));
    y = _y + radius + Math.floor(Math.random() * (_h - 2 * radius));
    fillCircle( x, y, radius, _fillColor);
  }
}

/////////////////////// ANIMATING CIRCLES ///////////////////////////////

let circleRollingInterval = 0;
let circleRollingX = 0  // left edge of the circle

function circle_rolling( _x, _y, _w, _h, _radius, 
                         _fillColor, _outlineColor) {
  fillRect( _x, _y, _w, _h, "pink");  // make bg pink
  ctx.strokeStyle = _outlineColor;
  fillCircle( _x + circleRollingX + _radius, 
              _y + _h - _radius, _radius, _fillColor);
  circleRollingX = (circleRollingX + 1) % (_w - 2 * _radius);
}

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
function start_circle_rolling( _x, _y, _w, _h, _radius, 
                            _fillColor, _outlineColor) {
  circleRollingX = _x;
  // redraw every 50 milliseconds
  circleRollingInterval = setInterval( function() { 
    circle_rolling( _x, _y, _w, _h, _radius, _fillColor, _outlineColor)
  }, 50);  
}



let circleBouncingInterval = 0;
let circleBouncingX = 0  // left edge of the circle
                         // can range from 0 to _w

function circle_bouncing( _x, _y, _w, _h, _radius, 
                         _fillColor, _outlineColor) {
  fillRect( _x, _y, _w, _h, "pink");  // make bg pink
  ctx.strokeStyle = _outlineColor;
  fillCircle( _x + circleBouncingX + _radius, 
              _y + _h - _radius, _radius, _fillColor);
  if (circleBouncingX >= (_w - 2 * _radius)) velocityX = -10;
  if (circleBouncingX <= 0) velocityX = 10;
  circleBouncingX += velocityX;
}

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
function start_circle_bouncing( _x, _y, _w, _h, _radius, 
                                _fillColor, _outlineColor) {
  circleBouncingX = 0;
  // redraw every 50 milliseconds
  circleBouncingInterval = setInterval( function() { 
    circle_bouncing( _x, _y, _w, _h, _radius, _fillColor, _outlineColor)
  }, 50);  
}


let numHail = 0;
let hailInterval = 0;
console.log("hey!")

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
function hail( _x, _y, _w, _h) {
  console.log("hail")
  // Math.random() returns [0,1)
  x = _x + Math.floor(Math.random() * _w);
  y = _y + Math.floor(Math.random() * _h);
  fillCircle( x, y, 1, "#FFF");
  numHail++;
  if (numHail >= 100) {
    clearInterval( hailInterval);  
  }
}

function start_hail( _x, _y, _w, _h) {
  fillRect( _x, _y, _w, _h, "#000");  // make bg black
  hailInterval = setInterval( function() { 
    hail( _x, _y, _w, _h)
  }, 500);  // draw 2 white dots every second
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
  drawRandomCircles(600,50,100,100,10,20,"green", "orange", 100);
  drawRandomCircles(700,50,100,100,10,20,"white", "black", 10);
  start_hail(800,50,100,100);
  start_circle_bouncing(900,50,200,50,20,"purple", "#FF0");
  start_circle_rolling(900,100,200,50,20,"purple", "#FF0");
  
}

draw()
