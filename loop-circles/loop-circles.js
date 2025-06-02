function setup() {
  createCanvas(600, 600);
  background(30, 30, 30);

  for (let y = 0; y < 12; y++) { 
    for (let x = 0; x <= 600; x += 30) {
      fill(x / 1.41);
      circle(x, height / 25 + y * 50, 20); 
    }
  }
}

function draw() {}
