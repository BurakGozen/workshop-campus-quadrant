/** @type {CanvasRenderingContext2D} */

const app = document.getElementById("app");
app.innerHTML = `<canvas id="canvas"></canvas>`;

const context = getCanvasContext();

function getCanvasContext() {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.margin = 0;
  canvas.style.padding = 0;
  canvas.style.backgroundColor = "#d8d8d8";
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  return canvas.getContext("2d");
}
