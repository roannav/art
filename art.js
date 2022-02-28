const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner


function draw() {
  fillBackground("#EEE");

  // Row 1
  drawManyShapes(0,0,100,100);
  drawCirclesGrowing(100,0,100,100,10, "blue", 5)
  drawLinesFromTopLeft(200,0,100,100, "red", 20)
  drawLinesFromTopRight(300,0,100,100, "red", 20)
  drawRandomCircles(400,0,100,100,10,20,"green", "orange", 100);
  drawRandomCircles(500,0,100,100,10,20,"white", "black", 10);
  start_hail(600,0,100,100);
  start_circle_bouncing(700,0,200,50,20,"purple", "#FF0");
  start_circle_rolling(700,50,200,50,20,"purple", "#FF0");

  // Row 2
  startRandomColorCircles(0,100,100,100,10,20);
  startColorfulSnake(100,100,200,100,10);
  drawTransparentCircles(300,100,400,100);
  translateTriangles(700,100,100,100);
  skewCircles(800,100,150,400);

  // Row 3
  scaleTriangles(0,200,100,100);
  scaleTriangles2(100,200,100,100);
  drawLinesFromTopLeft(200,200,100,100, "red", 3)
  drawLinesFromTopRight(300,200,100,100, "red", 2)
  rotateTrianglesPeach(400,200,100,100);
  rotateTrianglesMulticolor(500,200,100,100);
  rotateTrianglesMulticolor2(600,200,100,100);
  
}

draw()
