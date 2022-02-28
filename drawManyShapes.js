/////////////////////// DRAWING MANY SHAPES ////////////////////////////////

// _x, _y is the Top Left of the box
// _w, _h is the width and height of the box
function drawManyShapes( _x, _y, _w, _h) {
  outlineRect( _x, _y, _w, _h, "black");  // make outline black

  ctx.save();
  ctx.translate(_x, _y);

  outlineCircle( 10, 10, 10, "red");
  fillCircle( 30, 10, 10, "red");
  outlineRect(50,5,50,10,"cyan");
  fillRect(50,20,50,10,"cyan");
  drawLine( 50, 35, 100, 50, "#0F0", 5);
  outlineRightTriangle( 0, 45, 10, 20, "#00F");
  fillRightTriangle( 11, 46, 12, 22, "#00F");

  fillTriangle(0,70,10,55,40,80,"orange");
  outlineTriangle(50,70,60,55,90,80,"orange");

  ctx.restore();
}
