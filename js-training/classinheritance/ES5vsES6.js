/* ES6/ES2015 classes */
class A {
  constructor(a) {
    this.a = a;
  }
  print() {
    console.log(this.a, this.b)
  }
}

class B extends A {
  constructor(a) {
    super(a)
    this.b = 20
  }
}

/* ES5 equivalent */
function C() {
  this.c = 100
}

C.prototype.print = function () {
  console.log(this.c, this.d)
}

function D() {
  /*
   * Same as C.call(this) since we later do D.prototype = Object.create(C.prototype)
   */
  // Object.getPrototypeOf(D.prototype).constructor.call(this)
  D.prototype.constructor.call(this);
  this.d = 200
}

D.prototype = Object.create(C.prototype)


let a = new A()
let b = new B(30)
let c = new C()
let d = new D()

console.log(b.print()) // outputs 10 20
console.log(d.print()) // outputs 10 20

// Object.getPrototypeOf(D.prototype).constructor.call(this) can be simplize like this:

// D.prototype.constructor.call(this);

// It still works well