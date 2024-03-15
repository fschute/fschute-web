function setup() {
  createCanvas(600,600); //set canvas size
} 

function draw() {
  background(226, 234, 244); //set background colour 
  
  //lines connecting city (Cape Town, South Africa)
  line(100, 100, 150, 100);
  line(150, 100, 250, 200);
  line(250, 200, 200, 325);
  line(200, 325, 100, 325);
  line(100, 325, 75, 275);
  line(75, 275, 125, 225);
  line(125, 225, 100, 100);
  
  //proprtional symbol 1
  fill(239,195,202);
  strokeWeight(1); 
  stroke(0);
  ellipse(150, 175, 10, 10)
  
  //proportional symbol 2
  fill(239,195,202);
  strokeWeight(1); 
  stroke(0);
  ellipse(125, 300, 20, 20)
}
