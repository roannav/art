const container = document.querySelector("#main");
const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width = container.clientWidth;
const CANVAS_HEIGHT = canvas.height = container.clientHeight;
const ctx = canvas.getContext("2d");
// origin is in upper left corner

function draw() {
  ctx.fillStyle = "red";
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

// call the draw() function every 50 milliseconds
setInterval(draw, 50);
