/////////////////////// ANIMATING CIRCLES ///////////////////////////////


let colorStep = 0;
let drawRandomColorCirclesInterval = 0;

function drawRandomColorCircles( _x, _y, _w, _h, 
                            _minRadius, _maxRadius) {
  color = `hsl(${colorStep%360}, 100%, 50%)`;
  ctx.strokeStyle = color;
  radius = getRandomInteger(_minRadius, _maxRadius);
  x = _x + radius + Math.floor(Math.random() * (_w - 2 * radius));
  y = _y + radius + Math.floor(Math.random() * (_h - 2 * radius));
  fillCircle( x, y, radius, color);
  colorStep++;
}

function startRandomColorCircles( _x, _y, _w, _h, 
                            _minRadius, _maxRadius) {
  // redraw every 50 milliseconds
  drawRandomColorCirclesInterval = setInterval( function() { 
    drawRandomColorCircles( _x, _y, _w, _h, _minRadius, _maxRadius) 
  }, 50);  
}


let colorfulSnakeInterval = 0;
let snakeX = 0  // left edge of the circle
                // can range from 0 to _w
let snakeY = 0  // top edge of the circle
                // can range from 0 to _h
let snakeVX = 0 // velocity X
let snakeVY = 0 // velocity Y
function colorfulSnake( _x, _y, _w, _h, _radius) {
  color = `hsl(${colorStep%360}, 100%, 90%)`
  ctx.strokeStyle = color;

  fillCircle( _x + snakeX + _radius, 
              _y + snakeY + _radius, 
              _radius, color);

  if (snakeX >= (_w - 2 * _radius)) {
      snakeVX = -10;
  } else if (snakeX <= 0) {
      snakeVX = 10;
  } else if (Math.random() < 0.5) {  // ~50% chance
      snakeVX = -10;
  } else {                           // ~50% chance
      snakeVX = 10;
  }
  snakeX += snakeVX;

  if (snakeY >= (_h - 2 * _radius)) snakeVY = -10;
  if (snakeY <= 0) snakeVY = 10;
  snakeY += snakeVY;

  colorStep++;
} 

function startColorfulSnake( _x, _y, _w, _h, _radius) {
  snakeX = 0  // left edge of the circle
  fillRect( _x, _y, _w, _h, "black");  // make bg black
  // redraw every 50 milliseconds
  colorfulSnakeInterval = setInterval( function() { 
    colorfulSnake( _x, _y, _w, _h, _radius) 
  }, 50);  
}



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
let circleBouncingVX = 0
function circle_bouncing( _x, _y, _w, _h, _radius, 
                         _fillColor, _outlineColor) {
  fillRect( _x, _y, _w, _h, "pink");  // make bg pink
  ctx.strokeStyle = _outlineColor;
  fillCircle( _x + circleBouncingX + _radius, 
              _y + _h - _radius, _radius, _fillColor);
  if (circleBouncingX >= (_w - 2 * _radius)) circleBouncingVX = -10;
  if (circleBouncingX <= 0) circleBouncingVX = 10;
  circleBouncingX += circleBouncingVX;
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

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
function hail( _x, _y, _w, _h) {
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

