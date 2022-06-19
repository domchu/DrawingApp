const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
let size = 30;
let color = "black";
let x = undefined;
let y = undefined;
let isPressed = false;

// the mouse is pressdown
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

// the mouse is press up
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

// starting and continue drawing the circle
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offSetX; //the direction of the mouse
    const y2 = e.offSetY;

    drawCircle(x2, y2); //make the line thick
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// drawing a circle/arc
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
}

// drawing line
// drawLine(100, 100, 200, 200) the line thickness
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color; //targeting the color selector
  ctx.lineWidth = size;
  ctx.stroke();
}
// the increase button
increaseBtn.addEventListener("click", () => {
  size += 5; //make the line big
  if (size > 50) {
    size = 0;
  }
  updateSizeOnScreen();
});

// the decrease button
decreaseBtn.addEventListener("click", () => {
  size -= 5; //make the line small
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

// update size on the screen
function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

// the color update

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

//the clear button
clearEl.addEventListener("clear", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
