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


//////////////////////////////////////////////////////////////////////////////

var nextLineY = 0;
var nextLineX;
var drawLinesFromTopLeftInterval;

function drawNextLineFromTopLeft( _x, _y, _w, _h) {
  STEP = 4;  // space between the end points of the different lines
  outlineRect( _x, _y, _w, _h, "black");  // make outline black

  ctx.save();
  // move canvas origin to the box's upper left corner
  ctx.translate( _x, _y);

  drawLine( 0, 0, nextLineX, nextLineY, "aqua", 1);
  if (nextLineY <= _h - STEP)
    // keep drawing lines that intersect with right wall of the box.
    nextLineY += STEP;
  else if (nextLineX >= STEP)
    // keep drawing lines that intersect with bottom wall of the box.
    nextLineX -= STEP;
  else
    // stop drawing
    clearInterval( drawLinesFromTopLeftInterval);

  ctx.restore();
}

function drawLinesFromTopLeftAnimated( _x, _y, _w, _h) {
  nextLine_height=0;
  nextLineX = _w;
  drawLinesFromTopLeftInterval = setInterval( function() {
    drawNextLineFromTopLeft( _x, _y, _w, _h);
  }, 100);
}

//////////////////////////////////////////////////////////////////////////////
