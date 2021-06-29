var c1,c2;
var b1,b2;

function setup() {
  
  createCanvas(400, 400);
  
  
  b1 = createButton("RED");
  b1.position(10, 200);
  b1.mousePressed(red);
  
  b2 = createButton("GREEN");
  b2.position(100, 200);
  b2.mousePressed();

  textAlign(CENTER);
  textSize(15);
}

function draw(green) {
  background(200,10,200)
  text("Red",70,50)
  text("Green",270,50)
}

function red(){
  console.log(background="red");
}

function green(){
  console.log(background.color="green");
}





