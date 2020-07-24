var x = 0;
var y= 0;
var s = 10;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);
  var r = random(1);
  if(r < 0.25) {
    stroke(255,0,0);
    line(x,y,x+s,y+s);
  }
  else if( r < 0.5) {
    stroke(0,0,255);
    line(x,y+s,x+s,y);
  }
  else if(r < 0.75) {
    stroke(0,255,255);
    line(x+s/2,y,x+s/2,y+s);
  }
  else {
    stroke(255,255,0);
    line(x,y+s/2,x+s,y+s/2);
  }
  x +=s;
  //s= x/10;
  if(x > width) {
    x = 0;
    y+=s;
  }
    
}