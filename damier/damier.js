function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
    noStroke ();

  for (let j = 0; j < 15; j++) {
    for (let i = 0; i < 15; i++) {

      if( (i + j) % 2 == 1){
         fill(0);
      }
      else{
        fill(255);
      }
      square(i * 40, j * 40, 40);
    }
  }
}
