class Base {
  constructor() {
    this.value;
  }

  plus(...v) {
    this.value = this.val + v.reduce((sum, current) => sum + current);
    return this;
  }
  minus(...v) {
    const sum = v.reduce((sum, current) => sum + current);
    this.value = this.value - sum;
    return this;
  }
  multiply(v) {
    this.value = this.value * v;
    return this;
  }
  divide(v) {
    this.value = this.value / v;
    return this;
  }
  get() {
    return this.value;
  }
}

class IntBuilder extends Base {
  constructor(val) {
    super(val);
    val ? val : (val = 0);
    this.val = val;
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

IntBuilder.random(10, 100);

let num = intBuilder
.plus(2, 3, 2)
.minus(1, 2)
.multiply(2)
.divide(4)
.mod(3)
.get();

console.log(num)

// console.log(intBuilder.plus(2, 3, 2).value);
// console.log(intBuilder.minus(1, 2).value);
// console.log(intBuilder.multiply(2).value);
// console.log(intBuilder.divide(4).value);
// console.log(intBuilder.mod(3).value);
// console.log(intBuilder.get());
