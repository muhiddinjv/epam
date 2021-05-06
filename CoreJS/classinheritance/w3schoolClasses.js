"use strict" // If you use/delete a variable, object, function without declaring it, you will get an error.

//-----------------------------------------------------------------

// 1-INTRO
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) { return x - this.year; }
//   speed(s) { return s; }
//   color(c) { return c; }
// }
// let date = new Date().getFullYear();

// let myCar = new Car('Mercedes Benz', 1984);
// document.getElementById("demo").innerHTML =
//   `My car is a 
//   ${myCar.color('black')} 
//   ${myCar.name}, 
//   ${myCar.age(date)} years old and can go 
//   ${myCar.speed(200)} kph`;

//-----------------------------------------------------------------

// 2-INHERITANCE: A class created with a class inheritance (extends) inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   age() {
//     return new Date().getFullYear() - this.year;
//   }
// }

// // The class named "Model" will inherit the methods from the "Car" class
// class Model extends Car {
//   constructor(brand, year, speed) {
//     super(brand, year);
//     this.speed = speed;
//   }
//   show() {
//     return `I have ${this.brand} which is ${this.age()} years old and it can go ${this.speed} kph`
//   }
// }

// const car1 = new Model("Ford", 1984, 200);
// const car2 = new Model("Benz", 2002, 400);
// console.log(car1.show());
// console.log(car2.show());


//-----------------------------------------------------------------

// 3-STATIC: Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
class Car {
  constructor(name, year, speed) {
    this.name = name;
    this.year = year;
    this.speed = speed;
  }
  age() {
    return new Date().getFullYear() - this.year;
  }
  static hello(x) {
    return `${x.name} is ${x.age()} years old and can go ${x.speed} kph`
  }
}
// If you want to use the myCar object inside the static method, you can send it as a parameter
// let myCar = new Car("Ford", 1984, 300);

// You can calll 'hello()' on the Car Class:
// document.getElementById("demo").innerHTML = Car.hello(myCar);

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
