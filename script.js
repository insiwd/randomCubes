const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

let rect1 = document.getElementById("rect1");
let rect2 = document.getElementById("rect2");
let rect3 = document.getElementById("rect3");

class Rectangle {
  constructor(color, posX, posY, larg, alt) {
    // gerando cores aleatorias > 0 - 256
    this.color = `rgb(${Math.floor(Math.random() * 256)},
                      ${Math.floor(Math.random() * 256)},
                      ${Math.floor(Math.random() * 256)})`
    this.posX = Math.random() * canvas.width;
    this.posY = Math.random() * canvas.height;

    // larguras aleatorias > 100 - 120
    this.larg = Math.random() * 100 + 20;
    this.alt = Math.random() * 100 + 20;
  }
}

function drawTriangle() {

  ctx.beginPath();
  ctx.moveTo(Math.floor(Math.random() * 50), Math.floor(Math.random() * 20));
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(Math.floor(Math.random() * 15), Math.floor(Math.random() * 15), 50, 0, Math.PI * 2, true); // circle
  ctx.stroke();
}

function draw() {
  const rects = [];

  for (let i = 0; i < 3; i++) {
    rects.push(new Rectangle());
  }

  rects.forEach((rect, index) => {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.posX, rect.posY, rect.larg, rect.alt);
    drawTriangle() * 3;
    drawCircle();
    getColor(rect, index + 1);
  });
}

function getColor(rect, index) {
  document.getElementById(`rect${index}`).textContent = rect.color;
  document.getElementById(`rect${index}`).style.color = rect.color;
}

draw();

