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

