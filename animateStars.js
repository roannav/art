/////////////////////// ANIMATING STARS ///////////////////////////////

let growingStarStep = 0;
let growingStarInterval = 0;

// A simple star is 2 equilateral triangles, one upside down, placed on the 
// other one
function growingStar( _x, _y, _w, _h, 
                      _length, _color) {
  fillRect( _x, _y, _w, _h, "#44F");  // make outline blue 

  ctx.save();
  ctx.translate(_x, _y);

  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 4;
  ctx.shadowColor = "black";

  L = Math.sin(growingStarStep/30)*19 + _length;
  Y = _h/2 - L/3 * Math.sqrt(3);
  outlineEquilateralTriangle( _w/2, Y, L, _color);
  outlineEquilateralTriangle( _w/2, _h - Y, L, _color, true);

  growingStarStep++;

  ctx.restore();
}

function startGrowingStar( _x, _y, _w, _h, 
                            _length, _color) {
  // redraw every 50 milliseconds
  growingStarInterval = setInterval( function() { 
    growingStar( _x, _y, _w, _h, _length, _color)
  }, 50);  
}

