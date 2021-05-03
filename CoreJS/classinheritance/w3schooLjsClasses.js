"use strict" // If you use/delete a variable, object, function without declaring it, you will get an error.


// 1-INTRO
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) { return x - this.year; }
  speed(s) { return s; }
  color(c) { return c; }
}
let date = new Date().getFullYear();

let myCar = new Car('Benz', 1999);
document.getElementById("demo").innerHTML =
  `My car is ${myCar.color('black')}, 
  ${myCar.age(date)} years old and can go 
  ${myCar.speed(200)} kph`;

// 2-INHERITANCE
//A class created with a class inheritance (extends) inherits all the methods from another class

