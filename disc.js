/**
*
*    disc - hspencer
*
*/


var canvas, disc, t, inc, weight, sc;
var x1, y1, x2, y2, xa, ya, xb, yb;


function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('disc');
  t = 0;
  disc = createGraphics(500, 500);
  discReset();
  noFill();
}



function draw() {
  
  inc = parseFloat(document.getElementById("inc").value);
  t += inc;
  t % TWO_PI;
  
  weight = parseFloat(document.getElementById("weight").value);
  disc.strokeWeight(weight);

  sc = document.getElementById("strokeColor").value;
  disc.stroke(sc); 
  print(sc);

  x1 = mouseX - width/2;
  y1 = mouseY - height/2;
  x2 = pmouseX - width/2;
  y2 = pmouseY - height/2;

  xa = width/2 + x1*cos(t) - y1*sin(t);
  ya = height/2 + x1*sin(t) + y1*cos(t);
  xb = width/2 + x2*cos(t) - y2*sin(t);
  yb = height/2 + x2*sin(t) + y2*cos(t);

  if (mouseIsPressed && dist(mouseX,mouseY,width/2,height/2)<width/2) {
	  disc.line(xa, ya, xb, yb);
	}

  push();
  {
    translate(width/2, height/2);
    rotate(-t);
    image(disc, -width/2, -height/2);
  }
  pop();
}

function touchMoved(){
  disc.line(xa, ya, xb, yb);
}

function discReset() {
  background(0);
  disc.clear();
  push();
  translate(width/2, height/2);
  disc.stroke(0, 50);
  disc.strokeWeight(1);
  disc.noFill();
  disc.fill(255);
  disc.ellipse(width/2, height/2, disc.width, disc.height);
  disc.line(0, height/2, width, height/2);
  disc.line(width/2, 0, width/2, height);
  pop();
}

function clearDisc() {
  discReset();
}

function saveDisc(){
  var filename = "disc-"+year()+"-"+month()+"-"+day()+"-"+hour()+"-"+minute()+"-"+second()+".png"
  save(disc, filename);
}
