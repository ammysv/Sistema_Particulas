class Particulas {
  constructor(_x, _y, fase = 0) {
    this.pos = createVector(_x, _y);

    this.vel = createVector(0, 1); // direccion inicial hacia abajo
    this.vel.setMag(random(1, 2)); //giros en angulos y la magnitud

    this.tVida = int(random(50, 120));
    this.Vidainicial = this.tVida;
    this.estaMuerta = false;

    this.diam = random(5, 45);
    this.grav = createVector(0, 0.2);
    this.fase = fase; // lado izquierdo o derecho para el movimiento
    this.angulo = 0; // Control de la onda
    this.amp = random(70, 250); // distancia de ancho
    this.co = color(random(100, 234), random(100, 180), random(100, 255), 150);
  }

  update() {
    if (!this.estaMuerta) {
      this.angulo += 12;
      let offsetX = sin(this.angulo + this.fase) * this.amp; // movimiento ondulatorio

      this.pos.x = lerp(this.pos.x, mouseX + offsetX, 0.05); // movimiento suave hacia la posición objetivo

      this.vel.add(this.grav);
      this.pos.add(this.vel);

      this.tVida--;
    }

    if (this.tVida <= 0) {
      this.estaMuerta = true;
    }
  }

  display() {
    fill(this.co);
    stroke(251, 233, 135);
    strokeWeight(2);
    let d = map(this.tVida, this.Vidainicial, 0, this.diam, 0);
    circle(this.pos.x, this.pos.y, d);
  }
}

class medu {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.diam = 180;
  }

  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  display() {
    fill(200, 100, 260);
    stroke(250, 69, 128, 130);
    strokeWeight(15);
    arc(this.pos.x, this.pos.y, this.diam, this.diam, 180, 360, CHORD);
  }
}
