function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 0);
  
  for (let y = 0; y < 80; y++) {
    for (let x = 0; x < 80; x++) {
      noStroke();
      
      let r = (x * 55 + frameCount) % 255;
      let v = (y * 55 + frameCount) % 255;

      
      fill(r, v, 255);
      ellipse(x * 30, y * 30, 30);
      
    }
  }
}