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

// _x, _y is the top corner of an equilateral triangle with the point on top
// _w is the width of the base
// _flipUpsideDown is a boolean.  If true, then triangle is upside down, with
//   one corner pointing down.
function outlineEquilateralTriangle( _x, _y, _w, _color, _flipUpsideDown=false) {
  ctx.strokeStyle = _color;
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  if (_flipUpsideDown) {
    y2 = _y - _w * Math.sqrt(3)/2;
  } else {
    y2 = _y + _w * Math.sqrt(3)/2;
  }
  ctx.lineTo(_x+_w/2, y2);
  ctx.lineTo(_x-_w/2, y2);
  ctx.closePath();
  ctx.stroke();
}

// _x, _y is the top corner of an equilateral triangle with the point on top
// _w is the width of the base
// _flipUpsideDown is a boolean.  If true, then triangle is upside down, with
//   one corner pointing down.
function fillEquilateralTriangle( _x, _y, _w, _color, _flipUpsideDown=false) {
  ctx.fillStyle = _color;
  ctx.beginPath();
  ctx.moveTo(_x,_y);
  if (_flipUpsideDown) {
    y2 = _y - _w * Math.sqrt(3)/2;
  } else {
    y2 = _y + _w * Math.sqrt(3)/2;
  }
  ctx.lineTo(_x+_w/2, y2);
  ctx.lineTo(_x-_w/2, y2);
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

