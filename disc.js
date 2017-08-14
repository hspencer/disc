var canvas, disc, t, speed, inc, weight;

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('disc');
  t = 0;
  speed = 0.0123;
  disc = createGraphics(500, 500);
  discReset();
  background(0);
  noFill();
}

var x1, y1, x2, y2, xa, ya, xb, yb;

function draw() {
  
  inc = parseFloat(document.getElementById("inc").value);
  t += inc;
  t % TWO_PI;
  
  weight = parseFloat(document.getElementById("weight").value);
  disc.strokeWeight(weight);

  push();
  {
    translate(width/2, height/2);

    if (mouseIsPressed && dist(mouseX,mouseY,width/2,height/2)<width/2) {
      /*
      t += speed;
      t % TWO_PI;
      */
      x1 = mouseX - width/2;
      y1 = mouseY - height/2;
      x2 = pmouseX - width/2;
      y2 = pmouseY - height/2;

      xa = width/2 + x1*cos(t) - y1*sin(t);
      ya = height/2 + x1*sin(t) + y1*cos(t);
      xb = width/2 + x2*cos(t) - y2*sin(t);
      yb = height/2 + x2*sin(t) + y2*cos(t);

      disc.stroke(255, 200);
      disc.line(xa, ya, xb, yb);
    }
    rotate(-t);
    image(disc, -width/2, -height/2);
  }
  pop();
}


function discReset() {
  push();
  translate(width/2, height/2);
  disc.stroke(255, 50);
  disc.strokeWeight(1);
  disc.noFill();
  disc.background(0);
  disc.ellipse(width/2, height/2, disc.width, disc.height);
  disc.line(0, height/2, width, height/2);
  disc.line(width/2, 0, width/2, height);
  pop();
}

function clearDisc() {
  discReset();
}

function saveDisc(){
  var name = "disc-"+year()+"-"+month()+"-"+day()+"-"+hour()+"-"+minute()+"-"+second()+".png"
  save(name);
}