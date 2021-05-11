"use strict";

class Base {
  constructor(val) {
    this.val = val;
  };
  plus(...v) {
    this.value = this.val + v.reduce((totalSum, currentValue) => totalSum + currentValue);
    return this;
  };
  minus(n) { return this.val.slice(0, -n) }; // STRING
  divide(n) { return this.val.slice(0, n) }
  remove(str) {
    let char = this.val.split('');
    let chars = char.filter(val => val === str);
    for (let i = 0; i < chars.length; i++) {
      return this.val.split(chars[i]).join('')
    }
  }
  sub(s, l) {
    return this.val.substr(s, l);
  }
}
class IntBuilder extends Base {
  constructor(val) {
    val = typeof val === 'number' ? val : 0;
    super(val);
  }

  minus(...n) { // NUMBER
    const sum = n.reduce((totalSum, currentValue) => totalSum + currentValue);
    this.value = this.value - sum;
    return this;
  };
  multiply(n) { this.value = this.value * n; return this; };
  divide(n) { this.value = this.value / n; return this; };
  mod(n) { this.value = this.value % n; return this; };
  get stored() { return this.value; };
  static random(from, to) {
    let min = Math.ceil(from);
    let max = Math.floor(to);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function StringBuilder(val) {
  val = typeof val === 'string' ? val : "";
  Object.assign(this, new Base(val));
}

StringBuilder.multiply = function (n) {
  return strBuilder.val.repeat(n)
}

StringBuilder.prototype = Object.create(Base.prototype);

// NUMBER ------------------------------------------------------
let intBuilder = new IntBuilder(10);
console.log(intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .value);
console.log(intBuilder.stored); // get method
console.log(IntBuilder.random(10, 100)); // static method

// STRING -------------------------------------------------------
let strBuilder = new StringBuilder("Hello");
console.log(strBuilder.plus(' all', '!').value);
console.log(strBuilder.minus(4));
console.log(StringBuilder.multiply(2));
console.log(strBuilder.divide(4));
console.log(strBuilder.remove("l"));
console.log(strBuilder.sub(1, 1));