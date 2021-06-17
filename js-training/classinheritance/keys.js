// There should be one base class, 2 sub classes. One implemented  in ES6+, other in pre ES6. The goal of the task is to solidify our new knowledge of inheritance, by applying it on practice.

// Math.floor(Math.random() * 100) + 50; which will return me random number between 50 and 150

// random method returns number from 0 to 1. multiply number and after that use math floor or math ceil, it depends of your situation

// task supposed to be review by your mentor. Its supposed to be added to your (rsSchool) repo in inheritance branch in inheritance folder and dont forget to make pull request with access to review by your mentor

// constructor(value) {
//   try {
//       if(typeof value !='number') throw new Error("IntBuilder constructor HAVE TO BE INT!");
//     }
//     catch(err) {
//       throw err.message
//     }
//       super(value);
// Consider modifying the logic in the catch block or completely removing try and catch. Currently they’re useless because you throw an error, catch it and then throw another one without any error handling logic. Try - catch blocks should be used when you have some error handling logic that should be executed for the program to continue running correctly (without crashing). In this case you may completely remove the try catch and just throw an error and stop the program or leave try and catch but in the catch statement handle an error for example by logging the message and then resume program execution without crashing

//   Hi, I'm trying to submit this task. When I do PR on the branch with this task, I get the info: "There isn't anything to compare. Javascript-classes-inheritance and master are entirely different commit histories." or "No commit comments for this range". What can I do to perform PR?

// taroxlin — 05/03/2020
// @MichałKukiełka Its nothing to compare because your new project was done from scratch not via clone master. If you clone from master branch the init commit for both are same.

// I did it that way : Copy code/files to safe spot clean remove inhertance local and remote repo. Then just make again inheritance branch using cloning the master then u can paste your inheritance files there.

// remove method solution spoiler = >  You can do the remove method by splitting the string into array by the string you want to remove  and then join it

// Do I understand correctly: the "plus" method should be in the Base class, but used in the intBuilder class should add numbers, and in the StringBuilder class it should add strings?

// The "plus" method should check the input data type, do I think right?
// @AndrzejP 2+2 === 4 and 'a'+'b' === 'ab'  what are you going to check? ))

// Create a new branch called as the task requires. Clone your repo to your machine, open the repo, change the branche to the one you just created. When you are in that brunch Create a folder called inh... Inside that folder you need to write your program or copy your program. Then commit and push
// If I was Able to do that you are so :)

// So the branch name must be inheritance and the folder name inside it also should be named inheritance right? yes!

// function sum(...args) {
//   //if you console.log it
//   return args.reduce((totalSum, currentValue) => totalSum + currentValue);
// }
// console.log(sum(1, 2, 3, 4, 5));

// remove(str) {
//   let index = this.x.indexOf(str);
//   this.x =
//     this.x.substring(0, index) +
//     this.x.substring(index + str.length, this.x.length);
//   return this;
// }
// class IntBuilder extends Base {
//   constructor(value) {
//     value = typeof value === 'number' ? value : 0;
//     super(value);
//   }
// }
//Converting to 0 if constructor(string)