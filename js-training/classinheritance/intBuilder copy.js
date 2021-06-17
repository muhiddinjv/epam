"use strict";

class IntBuilder {
  constructor(int) {
    int > 0 ? this.int = int : int = 0;
    this.value = 0;
  };
  plus(...n) {
    this.value = n.reduce((totalSum, currentValue) => totalSum + currentValue) + this.int;
    return this;
  };
  minus(...n) {
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


const newInt = new IntBuilder(10);
console.log(newInt.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).value);
console.log(newInt.stored); // get method
console.log(IntBuilder.random(10, 100)); // static method