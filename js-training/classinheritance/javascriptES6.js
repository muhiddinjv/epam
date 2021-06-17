"use strict"

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  static countUsers() {
    console.log('There are 50 users');
  }

  register() {
    console.log(this.username + " is now registered");
  }
}
// let bob = new User("Bob", "bob@email.com", "1234")
// bob.register();
// User.countUsers();

//INHERIT CLASSES
class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage() {
    console.log(`${this.username} is subscribed to ${this.package} package and his email is ${this.email} and his password is not ${this.password}`);
  }
}

let mike = new Member("Mike", "mike@mike.com", "12355", "Platinum");


mike.getPackage();
mike.register();
