function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(45, 12, 22);
}

let circles = [];
function mousePressed() {
  circles.push({ x: mouseX, y: mouseY, radius: 0 });
}
function draw() {
  background(30, 30, 30);
  for (let circle of circles) {
    noFill();
    strokeWeight (3);
    stroke(255, 255, 255, 500 - (circle.radius*9) );
    ellipse(circle.x, circle.y, circle.radius * 15);
    circle.radius += 2;
  }
  circles = circles.filter(circle => circle.radius < 128);
}