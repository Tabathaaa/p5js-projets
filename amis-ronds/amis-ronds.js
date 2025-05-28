let circles = [40,8,15,16,23,42,80,33,24,50,25];
let t = 0;

function setup() {
  createCanvas(600, 600);
  background(100, 300, 50);
}

function draw() {
  background(100, 300, 50);

  let spacing = 50;
  let totalWidth = (circles.length - 1) * spacing;
  let startX = width / 2 - totalWidth / 2;

  for( let i = 0; i < circles.length; i++ ){
    let x = startX + i * spacing;
    let y = height / 2;

    if(i === 5){
      y += sin(t + i) * 5;
    }

    circle(x, y, circles[i]);
  }

  t += 0.05;
}
