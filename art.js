const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner


function draw() {
  fillBackground("#EEE");
  drawManyShapes(0,0,100,100);
  drawCirclesGrowing(100,0,100,100,10, "blue", 5)
  drawLinesFromTopLeft(400,50,100,100, "red", 20)
  drawLinesFromTopLeft(0,350,100,100, "red", 3)
  drawLinesFromTopRight(500,50,100,100, "red", 20)
  drawLinesFromTopRight(100,350,100,100, "red", 2)
  drawRandomCircles(600,50,100,100,10,20,"green", "orange", 100);
  drawRandomCircles(700,50,100,100,10,20,"white", "black", 10);
  start_hail(800,50,100,100);
  start_circle_bouncing(900,50,200,50,20,"purple", "#FF0");
  start_circle_rolling(900,100,200,50,20,"purple", "#FF0");
  startRandomColorCircles(0,150,100,100,10,20);
  startColorfulSnake(100,150,200,100,10);
  drawTransparentCircles(300,150,400,100);
  translateTriangles(700,150,100,100);
  rotateTrianglesPeach(800,150,100,100);
  rotateTrianglesMulticolor(900,150,100,100);
  rotateTrianglesMulticolor2(1000,150,100,100);
  scaleTriangles(0,250,100,100);
  scaleTriangles2(100,250,100,100);
  skewCircles(200,250,150,400);
  
}

draw()
