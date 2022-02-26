/////////////////// DRAWING A BASIC SHAPE  /////////////////

// NOTE: if colors are not updating correctly when strokeStyle() is called,
// then make sure all the beginPath() and closePath() have defined 
// the paths correctly.

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

