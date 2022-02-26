const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner


function draw() {
  fillBackground("#EEE");
  outlineCircle( 10, 10, 10, "red");
  fillCircle( 30, 10, 10, "red");
  drawCirclesGrowing( 100, 100, 10, "blue", 5)
  outlineRect(50,5,50,10,"cyan");
  outlineRect(250,5,50,10,"cyan");
  fillRect(50,20,50,10,"cyan");
  fillRect(250,20,50,10,"cyan");
  outlineRightTriangle( 120, 20, 10, 20, "#00F");
  fillRightTriangle( 131, 21, 12, 22, "#00F");
  drawLine( 150, 10, 200, 10, "#0F0", 5);
  fillTriangle(200,100,220,70,280,120,"orange");
  outlineTriangle(300,100,320,70,380,120,"orange");
  //drawLinesFromTopLeft(0,0,CANVAS_WIDTH,CANVAS_HEIGHT, "red", 20)
  drawLinesFromTopLeft(400,50,100,100, "red", 20)
  //drawLinesFromTopRight(0,0,CANVAS_WIDTH,CANVAS_HEIGHT, "red", 20)
  drawLinesFromTopRight(500,50,100,100, "red", 20)
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
  
}

draw()
