class Circle {
  constructor(x, y, r) {
    var options = {
      friction: 0,
      restitution: random(0, 1),
    };
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(engine.world, this.body);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill(random(100, 255), random(100, 255), random(100, 255));
      ellipse(0, 0, this.r * 2);
      pop();
    };
  }
}
