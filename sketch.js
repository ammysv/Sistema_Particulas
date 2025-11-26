let spA = [];
let spB = [];
let md = [];

function setup() {
  angleMode(DEGREES); // cambiar a grados
  createCanvas(windowWidth, windowHeight);
  md = new medu(mouseX, mouseY);
}

function draw() {
  background(31, 72, 120); // variante 290, 220, 140, 60

  for (let i = 0; i < spA.length - 1; i++) {
    noFill();
    stroke(251, 72, 220);
    strokeWeight(2);
    line(spA[i].pos.x, spA[i].pos.y, spA[i + 1].pos.x, spA[i + 1].pos.y);
  }

  for (let i = 0; i < spB.length - 1; i++) {
    noFill();
    stroke(251, 72, 220);
    strokeWeight(2);
    line(spB[i].pos.x, spB[i].pos.y, spB[i + 1].pos.x, spB[i + 1].pos.y);
  }

  for (let i = spA.length - 1; i >= 0; i--) {
    spA[i].update();
    spA[i].display();
    if (spA[i].estaMuerta) spA.splice(i, 1);
  }

  // --- Actualizar y dibujar serpiente B ---
  for (let i = spB.length - 1; i >= 0; i--) {
    spB[i].update();
    spB[i].display();
    if (spB[i].estaMuerta) spB.splice(i, 1);
  }
  spA.push(new Particulas(mouseX, mouseY)); // fase = 0 lado derecho
  spB.push(new Particulas(mouseX, mouseY, 180)); // fase = 1 lado izquierdo (reflejo)

  md.update();
  md.display();
}
