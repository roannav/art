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

function drawTransparentCircles(_x, _y, _w, _h) {
  outlineRect( _x, _y, _w, _h, "black");  // make outline black
  radius = 30;
  for( var i=0; i<360; i+=30) {
      color = `hsla(${i}, 100%, 50%, 50%)`;
      ctx.strokeStyle = color;
      fillCircle( _x + i + radius + 5, _y + _h/2, radius, color);
  }
}


