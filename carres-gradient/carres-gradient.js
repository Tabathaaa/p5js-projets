function setup() {
  createCanvas(600, 600);
  background(220);
  
  for ( let y = 0; y < 12; y++ ){
    
    for ( let x = 0; x < 12; x++){
      noStroke();
      print(y, x);
      fill( x*20, 0, y*20 );
      square(x*50, y*50, 50);
    }//x
  
  }//y

}

function draw() {}