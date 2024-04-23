const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

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

function draw() {
  const rects = [];

  for (let i = 0; i < 3; i++) {
    rects.push(new Rectangle());
  }

  rects.forEach(rect => {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.posX, rect.posY, rect.larg, rect.alt);
    drawTriangle();
  });
}

draw();
