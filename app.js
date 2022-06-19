const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const ctx = canvas.getContext("2d");
let size = 20;
let x = 50;
let y = 50;
let isPressed = false;

// the mouse is pressdown
canvas.addEventListener("mousedown", () => {
  isPressed = true;
});

// the mouse is pressup
canvas.addEventListener("mouseup", () => {
  isPressed = false;
});

// starting and continue drawing the circle
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x = e.offSetX;
    const y = e.offSetY;
    drawCircle(x, y);
  }
});

// drawing a circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

// the increase button
increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 0;
  }
});

// the decrease button
decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
});

// drawCircle();
// continue drawing circle

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(x, y);
//   requestAnimationFrame(draw);
// }
// draw();
