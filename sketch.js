let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 30); // variante 290, 220, 140, 60
  for (const [index, part] of sp.entries()) {
    part.update();
    part.display();
    if (part.estaMuerta) {
      sp.splice(index, 1);
    }
  }

  let np = new Particulas(mouseX, mouseY);
  sp.push(np);
}

function mouseClicked() {
  let np = new Particulas(mouseX, mouseY);
  sp.push(np);
}
