"use strict";

class Base {
  constructor(value) {
    this.value = value;
  }

  plus(...v) {
    this.value = v.reduce((sum, current) => sum + current, this.value);
    return this;
  }

  minus(...v) {
    if (typeof this.value === "number") {
      const sum = v.reduce((sum, current) => sum + current);
      this.value = this.value - sum;
    } else {
      this.value = this.value.slice(0, -v);
    }
    return this;
  }

  multiply(v) {
    if (typeof this.value === "number") {
      this.value = this.value * v;
      return this;
    } else {
      this.value = this.value.repeat(v);
    }
    return this;
  }

  divide(v) {
    if (typeof this.value === "number") {
      this.value = this.value / v;
      return this;
    } else {
      this.value = this.value.slice(0, v);
      return this;
    }
  }

  get() {
    return this;
  }
}

// IntBuilder ---------------------------------------------
class IntBuilder extends Base {
  constructor(value = 0) {
    super(value);
  }
  mod(n) {
    this.value = this.value % n;
    return this;
  }
  static random(from, to) {
    let min = Math.ceil(from);
    let max = Math.floor(to);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const intBuilder = new IntBuilder(10);

let ran = IntBuilder.random(10, 100);

let int = intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get(); // -> 1;

// StrBuilder ---------------------------------------------
function StringBuilder(value = "") {
  Object.assign(this, new Base(value));
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function (str) {
  this.value = this.value
    .split("")
    .filter((s) => s !== str)
    .join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.split("").splice(from, n).join("");
  return this;
};

let strBuilder = new StringBuilder("Hello");
let s = strBuilder
  .plus(" all", "!") // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove("l") // 'He';
  .sub(1, 1) // 'e';
  .get(); // -> 'e';

console.log(`
Integer: ${int.value}, 
random: ${ran}, 
String: ${s.value}`);
