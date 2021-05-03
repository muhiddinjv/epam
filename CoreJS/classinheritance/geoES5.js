"use strict";
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    return this;
  }

  goTo(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  static distanceX(a, b) {
    const delta = b.x - a.x;
    return Math.abs(delta);
  }

  static distanceY(c, d) {
    const delta = c.y - d.y;
    return Math.abs(delta);
  }
}

class Rectangular {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  get area() {
    const width = Point.distanceX(this.p1, this.p2);
    const height = Point.distanceY(this.p1, this.p2);
    return width + height;
  }
}

class Square {
  constructor(p1, size) {
    this.p1 = p1;
    this.size = size;
  }
  p2() {
    const p2 = new Point(p1.x + size, p1.y + size)
  }
}

const point1 = new Point(1, 2);
const point2 = new Point(3, 4);
const dist = Point.distanceX(point1, point2);
const rect = new Rectangular(point1, point2);
console.log(rect.area);


point2
  .goTo(0, 0)
  .move(2, 4)
  .move(1, 1);
console.log(point2);
console.log(dist);



