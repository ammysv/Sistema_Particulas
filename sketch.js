let sp = [];
let md = [];

function setup() {
  angleMode(DEGREES); // cambiar a grados
  createCanvas(windowWidth, windowHeight);
  md = new medu(mouseX, mouseY);
}

function draw() {
  background(31, 72, 120); // variante 290, 220, 140, 60
  for (const [index, part] of sp.entries()) {
    part.update();
    part.display();
    if (part.estaMuerta) {
      sp.splice(index, 1);
    }
  }
  sp.push(new Particulas(mouseX, mouseY)); // fase = 0 lado derecho
  sp.push(new Particulas(mouseX, mouseY, 180)); // fase = 1 lado izquierdo (reflejo)

  md.update();
  md.display();
}
