/////////////////// DRAWING A SINGLE LINE  /////////////////

function drawLine( _x, _y, _x2, _y2, _color, _lineWidth) {
  oldPenColor = ctx.strokeStyle;
  oldPenWidth = ctx.lineWidth;
  ctx.strokeStyle = _color;
  ctx.lineWidth = _lineWidth;
  ctx.beginPath();
  ctx.moveTo(_x, _y);
  ctx.lineTo(_x2, _y2);
  ctx.closePath();
  ctx.stroke();
  // restore pen color
  ctx.strokeStyle = oldPenColor;
  ctx.lineWidth = oldPenWidth;
}

