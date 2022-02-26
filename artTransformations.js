// fillRightTriangle( x, y, w, h, color) 
// x, y is the right angle corner of the triangle
// w, h are the length of the legs

// _x, _y, _w, _h:  upper-left corner and size of the box containing the scene
function translateTriangles( _x, _y, _w, _h) {
  outlineRect( _x, _y, _w, _h, "black");  // make outline black
  TRI_WIDTH = 10;
  TRI_HEIGHT = 20;
  for( var j=1; j <= _h / TRI_HEIGHT; j++) {
    ctx.save();
    for( var i=0; i < _w / TRI_WIDTH; i++) {
      fillRightTriangle( _x + 1, _y + j * TRI_HEIGHT, TRI_WIDTH, TRI_HEIGHT, 
        "red");
      // ctx.translate(x,y) makes x,y become the new 0,0 on the canvas
      ctx.translate(TRI_WIDTH, 0);
    }
    ctx.restore();
  }
}
  

function getNextColor( _colorScheme, _i) {
  if (_colorScheme == "peach") {
    return `hsla(${_i}, 100%, 50%, 50%)`;
  } else if (_colorScheme == "multicolor_transparent") {
    return `hsla(${_i*10}, 100%, 50%, 50%)`;
  } else if (_colorScheme == "multicolor") {
    return `hsl(${_i*10}, 100%, 50%)`;
  }
  return "black";
}


function rotateTriangles( _x, _y, _w, _h, _colorScheme) {
  outlineRect( _x, _y, _w, _h, "black");  // make outline black
  TRI_WIDTH = 5;
  TRI_HEIGHT = 40;
  BOX_CENTER_X = _x + _w / 2;
  BOX_CENTER_Y = _y + _h / 2;
  ctx.save();
  ctx.translate(BOX_CENTER_X, BOX_CENTER_Y);
  for( var i=1; i<=36; i++) {
    color = getNextColor( _colorScheme, i);
    fillRightTriangle( 0, TRI_HEIGHT, TRI_WIDTH, TRI_HEIGHT, color);
    // ctx.rotate( angle):  angle is in radians
    ctx.rotate(deg2Rad(10));
  }
  ctx.restore();
}

function rotateTrianglesPeach( _x, _y, _w, _h) {
  rotateTriangles( _x, _y, _w, _h, "peach");
}
  
function rotateTrianglesMulticolor( _x, _y, _w, _h) {
  rotateTriangles( _x, _y, _w, _h, "multicolor_transparent");
}
  
function rotateTrianglesMulticolor2( _x, _y, _w, _h) {
  rotateTriangles( _x, _y, _w, _h, "multicolor");
}
  
function scaleTriangles( _x, _y, _w, _h) {
  outlineRect( _x, _y, _w, _h, "black");  // make outline black
}

