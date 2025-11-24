class Particulas {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 2));

    this.tVida = int(random(50, 150));
    this.Vidainicial = this.tVida;
    this.estaMuerta = false;

    this.diam = random(20, 50);

    this.grav = createVector(0, 0.05);
  }

  update() {
    if (!this.estaMuerta) {
      this.pos.add(this.vel);
      this.vel.add(this.grav);
      this.vel.rotate(random(-0.1, 0.2));
      this.tVida--;
    }

    if (this.tVida <= 0) {
      this.estaMuerta = true;
      return;
    }
  }

  display() {
    fill(255);
    noStroke();
    this.diamFinal = map(this.tVida, this.Vidainicial, 0, this.diam, 0);
    circle(this.pos.x, this.pos.y, this.diamFinal);
  }
}
