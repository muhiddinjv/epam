function space() {
  console.log();
  console.log();
}
//Problem 1 

console.log('Problem 1: CSV representation of array');

function toCsvText(arr) {
  return arr.join('\n');
}

console.log(toCsvText(
  [[0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]]));

//0,1,2,3,4
//10,11,12,13,14
//20,21,22,23,24
//30,31,32,33,34


//Problem 2
space();

console.log('Problem 2: Lost Without a Map');

function maps(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
console.log(maps([1, 2, 3]));//Expected [2,4,6]

//second way to solve problem 2
console.log('Second way to solve problme 2')
function maps(arr) {
  return arr.map(n => n * 2);
}
console.log(maps([2, 4, 6]))

// ***The map() method creates a new array with the results of calling a provided function on every element in the calling array.



//Problem 3
space()

console.log('Problem 3: Skip numbers in String:')
function stringClean(str) {
  var numbers = "1234567890"
  var newStr = "";
  //loop that goes through the string given and analizes. If the elements is part of the car numbers it skips it 
  // otherwise goes and add it to the var newStr 
  for (var i = 0; i < str.length; i++) {
    if (numbers.indexOf(str[i]) >= 0) {
      continue;
    } else {
      newStr += str[i];
    }
  }
  //   returns the new string
  return newStr;
}
console.log(stringClean('This looks5 grea8t!')) // 'This looks great!'


console.log('second way to solve Problem 3');
function stringClean2(str) {
  return str.replace(/\d/g, "");
}
console.log(stringClean2('This looks5 grea8t!')) == 'This looks great!'

// stringClean('! !') == '! !'
// stringClean('123456789') == ''


//Probem 4
space()
console.log('Problem 4: Reverse String Words')


function reverse(str) {
  //Make array from string
  str = str.split(' ');
  //Create empty array for reversed words
  var newArr = [];
  //Loop over array and push reversed words into new array
  for (var i = str.length - 1; i >= 0; i--) {
    newArr.push(str[i]);
  }
  //Make string from reversed words in array
  str = newArr.join(' ');
  //Return new string
  return str;
}


console.log(reverse('Hello World')) === 'World Hello'
console.log(reverse('Hi There.')) === 'There. Hi'


//Problem 5
space()
console.log('Problem 5: 10X Salary if there is bonus')
function bonusTime(salary, bonus) {
  if (bonus === false) {
    return "£" + salary;
  } else if (bonus === true) {
    return "£" + salary * 10;
  }
}

console.log(bonusTime(10, false))
console.log('second way to solve problem 5')

function bonusTime2(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
console.log(bonusTime2(100, true))

//Problem 6
space();
console.log('Problem 6:')
//take word, and push it into arr with orignal word in 0 index, and the altered in the first index.

function whoIsPaying(name) {
  if (name.length <= 2)
    return [name]

  return [name, name.slice(0, 2)]
}

console.log(whoIsPaying('mexico')) //[ 'mexico', 'me' ]



space()
console.log('Second way to solve problem 6')


var whoIsPaying = function (str) {

  return [str, str.slice(0, 2)]
}

console.log(whoIsPaying('mexico')) //[ 'mexico', 'me' ]



//Problem 7
space();
console.log('Problem 7: ')

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (years) {
  if (!years) {
    return 0;
  }
  if (years === 1) {
    return [1, 15, 15];
  } else if (years === 2) {
    return [2, 24, 24];
  } else if (years > 2) {
    return [years, 24 + ((years - 2) * 4), 24 + ((years - 2) * 5)]
  } else {
    return 0
  }
}

console.log(humanYearsCatYearsDogYears(10)); //[ 10, 56, 64 ]

//Problem 8
space()
console.log('Problem 8: Century from Year')


// Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Let's see some examples:

// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20

function century(year) {
  var century = 0;

  for (var i = 0; i < year; i++) {
    if (i % 100 === 0) {
      century++
    }
  }
  if (century === 1) {
    return century + "st century"
  } else {
    return century + "th century";
  }
}


console.log(century(67)) // 1st century
console.log(century(1705)) // 18th century
console.log(century(1900)) // 19th century
console.log(century(1601)) // 17th century
console.log(century(2000)) // 20th century


console.log('Second way to solve problem 8')
function century2(year) {
  return (year + 99) / 100 | 0;

}
console.log(century2(1988)) //20


//Problem 9
space();
console.log('Problem 9: Man in the West')

function checkTheBucket(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "gold") {
      return true;
    }
  }
  return false;
}

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"])) //false
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "stone"])) //true

console.log('second way to solve problem 9');

function checkTheBucket2(arr) {
  return arr.includes('gold')
}
console.log(checkTheBucket2(["stone", "stone", "stone", "gold", "stone"])) //true
console.log(checkTheBucket2(["stone", "stone", "stone", "stone", "stone"])) //false


//Problem 10
space()
console.log('Problem 10: make Negative')
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0

var makeNegative = function (num) {
  if (num === 0) {
    return 0
  }
  return -num
}

console.log(makeNegative(1))//-1
console.log(makeNegative(-5))//5
console.log(makeNegative(0))// 0
console.log(makeNegative(-15))//15



//Problem 11 -----------------------------------------------------------------------
space()
console.log("Problem 11: Array Plus Array------------------------------------------")
//NOTE if you're going to concat more than two arr, then just use 
//arr = arr1.concat(arr2, arr3, arr4)

var arrayPlusArray = function (arr1, arr2) {
  let newArr = []
  let sum = 0

  newArr = arr1.concat(arr2)

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
  }
  return sum
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) // -21

//Problem 12
space();
console.log('Problem 12: Remove String Spaces')

function noSpace(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;

}
console.log(noSpace('There is no cow level')) //thereisnocowlevel

console.log('Second way to solve problem 12')
function noSpace2(str) {
  return str.replace(/\s/g, '');
}

console.log(noSpace2('no more space'))


//Problem 13
space();
console.log("Problem 13: Multiple of Index")

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % i === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // [-6, 32, 25] return element that are multiples of own idex (mindfuckiknow)



//Problem 14
space();
console.log('Problem 14: reverseSeq')

// Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]


function reverseSeq(num) {
  var arr = [];

  for (num; num > 0; num--) {
    arr.push(num)
  }
  return arr;
}
console.log(reverseSeq(5)) // [5,4,3,2,1]


//Problem 15
space();
console.log('Problem 15: Check the exam')

/*

The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

var checkExam = function (answer, student) {
  let score = 0

  for (let i = 0; i < answer.length; i++) {
    if (student[i] === answer[i]) {
      score += 4
    } else if (student[i] === '') {
      score += 0
    } else {
      score--
    }
  }
  if (score < 0) {
    return 0
  }
  return score
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // → 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) // → 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // → 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) // → 0//first arr = answers
console.log(checkExam(["a", "a", "b", "c"], ["", "", "", "a"])) // → 0
//second arr = test
//+4 for each correct answer
//-1 for incorrect answers
//0 for empty str.


//Problem 16
space();
console.log('Problem 16: Count Odd numbers below n')

// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]


function oddCount(num) {
  var count = 0;

  for (var i = 0; i < num; i++) {
    if (i % 2 === 1) {
      count++;
    }
  }
  return count;
}

console.log(oddCount(15))// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]


//Problem 17
space();
console.log('Problem 17: defineSuit')


function defineSuit(card) {

  if (card.includes('♣')) {
    return "clubs"
  } else if (card.includes('♦')) {
    return 'diamonds'
  } else if (card.includes('♥')) {
    return 'hearts'
  } else {
    return 'spade;'
  }
}
console.log(defineSuit('2♣'))



//Problem 18
space();
console.log('Problem 18: Who ate the last cookie?')

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!


var cookie = function (str) {
  if (typeof str === 'string') {
    return 'Who ate the last cookie? It was Zach!'
  } else if (typeof str === 'number') {
    return 'Who ate the last cookie? It was Monica!'
  } else if (typeof str === 'bool') {
    return 'Who ate the last cookie? It was the dog!'
  } else {
    return 'Who ate the last cookie? It was the dog!'
  }
}


//string --> number --> bool always!
console.log(cookie('hi')) //Who ate the last cookie? It was Zach!
console.log(cookie(8)) //Who ate the last cookie? It was Monica!
console.log(cookie(true)) // Who ate the last cookie? It was the dog!



//Problem 19
space();
console.log('Problem 19:')

function isDivisible(wallLength, pixelSize) {
  if (wallLength % pixelSize === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(4050, 27)) //true



//Problem 20
space();
console.log('Problem 20: MultiTable ')


var multiTable = function (num) {
  let str = ''

  for (let i = 1; i <= 10; i++) {
    str += i + ' * ' + num + ' = ' + (i * num) + (i === 10 ? '' : '\n')
  }
  return str
}
console.log(multiTable(9))
/*

1 * 9 = 9
2 * 9 = 18
3 * 9 = 27
4 * 9 = 36
5 * 9 = 45
6 * 9 = 54
7 * 9 = 63
8 * 9 = 72
9 * 9 = 81
10 * 9 = 90

*/

//Problem 21
space();
console.log('Problem 21: Even or odd?')
function even_or_odd(num) {
  if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

console.log(even_or_odd(5)) //odd


//Problem 22
space();
console.log('Problem 22: USD to CNY')
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// For Example:

//   usdcny(15) // => '101.25 Chinese Yuan'
//   usdcny(465) // => '3138.75 Chinese Yuan'

function usdcny(usd) {
  var num = 0
  num = usd * 6.75

  return num.toFixed(2) + (" Chinese Yuan")
}
console.log(usdcny(15))


//Problem 23
space();
console.log('Problem 23: aspectRatio')
// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.


function aspectRatio(x, y) {
  return [Math.ceil(y * 16 / 9), y];
}

console.log(aspectRatio(640, 480))// [854,480]);
console.log(aspectRatio(960, 720))// [1280,720]);
console.log(aspectRatio(1440, 1080)) // [1920,1080]);
console.log(aspectRatio(1920, 1440)) // [2560,1440]);


//Problem 24
space();
console.log('Problem 24: Check is x is in a')
function check(a, x) {
  return a.includes(x)
};


console.log(check([66, 101], 66))// true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))// true);
console.log(check(['t', 'e', 's', 't'], 'e'))// true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))// false);

//Problem 25
space();
console.log('Problem 25: Speak English')

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.



function spEng(str) {
  var str = str.toLowerCase();

  return str.includes('english')
}
console.log(spEng('englishh'))



//Problem 26
space();
console.log('Problem 26: get Real Floor')
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

// Write a function that given an American floor (passed as an integer) returns the real floor.
// Moreover, your function should work for basement floors too: just return the same value as the passed one.

// Usage Examples
// getRealFloor(1) == 0 
// getRealFloor(0) == 0 // Special case to please Europeans
// getRealFloor(5) == 4
// getRealFloor(15) == 13
// getRealFloor(-3) == -3


function getRealFloor(n) {
  if (n < 0) {
    return n;
  } if (n === 1 || n === 0) {
    return 0;
  } else if (n === 13) {
    return 1
  } else if (n >= 13) {
    return n - 2
  } else {
    return n - 1;
  }
}
console.log(getRealFloor(13));


//Problem 27
space();
console.log('Problem 27: Count Sheep')

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arr) {
  var sheep = 'true'
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (sheep.indexOf(arr[i]) >= 0) {
      count++
    }
  }
  return count;
}

console.log(countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]));





//Problem 27
space();
console.log('Problem 27: Merage Array and Filter')


function mergeArrays(arr1, arr2) {

  var arr = arr1.concat(arr2) //<--Merge Arrays

  arr = arr.sort(); //<--Sort Array
  arr.sort(function (a, b) {//<--Making sure it is sort from smallest to largest!
    return a - b;
  });


  //remove duplicates
  var uniqueArray = arr.filter(function (elem, pos) {
    return arr.indexOf(elem) == pos;
  });
  return uniqueArray
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]))// [1,2,3,4,5,6,7,8], "Basic tests");
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))// [1,2,3,4,5,6,7,8,9,10], "Basic tests");
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))//, [1,2,3,4,5,7,9,10,11,12], "Basic tests");


//Problem 28
space();
console.log('Problem 28: Class Practice ES6')
// Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    Object.assign(this, { firstName, lastName, age, gender });
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}


//Problem 29
space();
console.log('Problem 29: Chicken and Cow Heads and feet')


// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

function animals(heads, legs) {
  for (var i = 0; i <= heads; i++) {
    if ((i * 4 + (heads - i) * 2) == legs) {
      return [heads - i, i];
    }
  }
  return 'No solutions';
}
console.log(animals(72, 200))


//Problem 30
space();
console.log('Problem 30: nthEven')
// Return the Nth Even Number

// nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466


function nthEven(n) {
  return (n - 1) * 2;
}
console.log(nthEven(10))


//Problem 31
space();
console.log('Problem 31: Combat health below 0')


function combat(health, damage) {
  var newHealth;

  if (health < damage) {
    newHealth = 0;
  } else {
    newHealth = health - damage;
  }
  return newHealth
}

//Problem 32
space();
console.log('Problem 32: Return the Day')
function whatday(num) {

  if (num === 1) {
    return "Sunday";
  } else if (num === 2) {
    return "Monday"
  } else if (num === 3) {
    return "Tuesday"
  } else if (num === 4) {
    return "Wednesday"
  } else if (num === 5) {
    return "Thursday"
  } else if (num === 6) {
    return "Friday"
  } else if (num === 7) {
    return "Saturday"
  } else {
    return "Wrong, please enter a number between 1 and 7"
  }
}

console.log(whatday(1))//,'Sunday')
console.log(whatday(2))//, 'Monday')
console.log(whatday(3))//,'Tuesday')
console.log(whatday(8))//,  'Wrong, please enter a number between 1 and 7')
console.log(whatday(20))//,  'Wrong, please enter a number between 1 and 7')

space()
console.log('Second way to solve Problem 32: Returnt he Day')
function whatday2(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}
console.log(whatday2(2))//,'Sunday')
console.log(whatday2(3))//, 'Monday')
console.log(whatday2(4))//,'Tuesday')
console.log(whatday2(8))//,  'Wrong, please enter a number between 1 and 7')
console.log(whatday2(20))//,  'Wrong, please enter a number between 1 and 7')

//Problem 33
space();
console.log('Problem 33: Remove !')

function remove(str) {
  var newStr = '';
  var s = '!';

  for (var i = 0; i < str.length; i++) {
    if (s.indexOf(str[i]) >= 0) {
      continue;
    }
    newStr += str[i]
  }
  return newStr + "!"
}
console.log(remove("Hi!"))// === "Hi!"
console.log(remove("Hi!!!"))//) === "Hi!"
console.log(remove("!Hi"))// === "Hi!"
console.log(remove("!Hi!")) // === "Hi!"
console.log(remove("Hi! Hi!")) === "Hi Hi!"
console.log(remove("Hi"))// === "Hi!"


//Problem 34                  !!!TERNARY OPERATOR!!!
space();
console.log('Problem 34: Solve using Ternary Operator----------------------------')


// JS and Ruby also support the ternary operator and Python has something similar too:

// condition ? statementa : statementb
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

// function oddEven(n){
//   return n%2==1 ? "odd number" : "even number";
// }
// function oldYoung(age){
//   return age<16 ? "children" : age<50 ? "young man" : "old man";
// }


// Task:
// Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+


function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
}


console.log(saleHotdogs(1))//,100);
console.log(saleHotdogs(4))//,400);
console.log(saleHotdogs(5))//,475);
console.log(saleHotdogs(9))//,855);
console.log(saleHotdogs(10))//,900);
console.log(saleHotdogs(100))//,9000);
space()
console.log('Second way to solve Ternary Operator------------------------------')

function saleHotdogs2(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
console.log(saleHotdogs2(1))//,100);
console.log(saleHotdogs2(4))//,400);
console.log(saleHotdogs2(5))//,475);
console.log(saleHotdogs2(9))//,855);
console.log(saleHotdogs2(10))//,900);
console.log(saleHotdogs2(100))//,9000);



//Probelm 35
space();
console.log('Problem 35: Bulelts and dragons')



function hero(bullets, dragons) {
  if (dragons * 2 <= bullets) {
    return true;
  }
  return false;
}

console.log(hero(10, 5))//, true);
console.log(hero(7, 4))//, false);
console.log(hero(4, 5))//, false);
console.log(hero(100, 40))//, true);
console.log(hero(1500, 751))//, false);
console.log(hero(0, 1))//, false);

space();
console.log("second way to solve bullet and dragons")

function hero2(bullets, dragons) {
  return bullets >= dragons * 2
}

console.log(hero2(10, 5))//, true);
console.log(hero2(7, 4))//, false);

//Problem 36
space();
console.log('Problem 36: is there enough room?')

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

console.log(enough(10, 5, 5))//, 0);
console.log(enough(100, 60, 50))//, 10);


//Problem 37                    !!HOW TO REPLACE SYMBOLS!!
space();

console.log('Problem 37: Replace with new symbol')

function htmlspecialchars(formData) {

  return formData.replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
console.log(htmlspecialchars('<>"&'))

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;


//Problem 38
space();
console.log('Problem 38: Sum array')

function sum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum([]))//, 0);
console.log(sum([1, 5.2, 4, 0, -1]))//, 9.2);



//Problem 39 ---------------------------------------------------------------------
space();
console.log('Problem 39: type of calculator------------------------------------')

function calculator(a, b, sign) {
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
  return "unknown value";
}

console.log(calculator(1, 2, "+"))//, 3, "calculate");
console.log(calculator(1, 2, "-"))//, -1, "calculate");
console.log(calculator(3, 5, "*"))//, 15, "calculate");
console.log(calculator(6, 2, "/"))//, 3, "calculate");
console.log(calculator(6, 2, "$"))//, "unknown value", "calculate"); 
console.log(calculator(6, "h", "*"))//, "unknown value", "calculate");   



//Problem 40 ----------------------------------------------------------------------
space();
console.log('Problem 40: How many on bus?-----------------------------------')

function number(busStops) {
  var totalPeople = 0;

  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}


console.log(number([[10, 0], [3, 5], [5, 8]]))//,5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))//,17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))//,21);



//Problem 41 ---------------------------------------------------------------------
space();
console.log('Problem 41: Nickname! --------------------------------------------')

function abbrevName(name) {

  var arr = name.split(" ");
  return (arr[0][0] + "." + arr[1][0]).toUpperCase();
}

console.log(abbrevName("Sam Harris"))//, "S.H");
console.log(abbrevName("Patrick Feenan"))//, "P.F");
console.log(abbrevName("Evan Cole"))//, "E.C");
console.log(abbrevName("P Favuzzi"))//, "P.F");
console.log(abbrevName("David Mendieta"))//, "D.M");

//Problem 42 ---------------------------------------------------------------------
space();
console.log('Problem 42: SuperSize me-------------------------')

function superSize(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''))
}
console.log(superSize(69))//,96)
console.log(superSize(513))//,531)
console.log(superSize(2017))//,7210)
console.log(superSize(414))//,441)


//Problem 43
space();
console.log('Problem 43: String to number and back!')


function sumStr(a, b) {
  var total = 0;

  if (!a && !b) {
    return '0'
  } if (!a) {
    return b
  } if (!b) {
    return a
  }

  total = parseInt(a) + parseInt(b)
  return total.toString()
}
console.log(sumStr("", ""))//, "0");
console.log(sumStr("4", "5"))//, "9");
console.log(sumStr("34", "5"))//, "39");


//Problem 44
space();
console.log('Problem 44: Min, Max, difference in age')

function differenceInAges(ages) {
  var max = [];
  var min = [];
  var diff = [];
  var newArr = [];

  max = Math.max.apply(Math, ages)
  min = Math.min.apply(Math, ages)
  diff = max - min;

  newArr.push(min)
  newArr.push(max)
  newArr.push(diff)

  return newArr
}

console.log(differenceInAges([82, 15, 6, 38, 35]))//, [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]))//, [14, 99, 85]);


//Problem 45
space();
console.log('Problem 45: ')


const isReallyNaN = Number.isNaN
console.log(isReallyNaN('37'))// === false)
console.log(isReallyNaN(undefined))// === false)
space()

console.log('Second way to solve problem 45')
function isReallyNaN2(val) {
  if (val === undefined) return false
  if (val === Number) return false
  if (val === Function) return false
  if (val === Object) return false
  if (typeof (val) === "object") return false
  if (typeof (val) === "function") return false
  if (!isNaN(val)) return false
  if (typeof (val) === "string") return false
  if (isNaN(val)) return true
  else return false
}
console.log(isReallyNaN2(NaN))// === true)
console.log(isReallyNaN2(37))




//Problem 46 --------------------------------------------------------------------
space();
console.log('Problem 46: Collatz conjecture-------------------------------------')
//https://en.wikipedia.org/wiki/Collatz_conjecture

function hotpo(n) {
  if (n === 0) {
    return 0;
  }
  var count = 0;

  while (n > 1) {
    n = (n % 2 === 0 ? n / 2 : 3 * n + 1);
    count++;
  }
  return count;
}

console.log(hotpo(5)) //5
console.log(hotpo(6)) //8
console.log(hotpo(23)) // 15


//Problem 47 ----------------------------------------------------------------------
space();
console.log('Problem 47: addLength to each word-------------------------------')

function addLength(str) {
  var str = str.split(' ');
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    arr.push(str[i] + ' ' + str[i].length)
  }
  return arr;
}
console.log(addLength('apple ban'))//,["apple 5", "ban 3"]);
console.log(addLength('you will win'))//,["you 3", "will 4", "win 3"]);

space();

console.log('HOF to solve Problem 47')
function addLength2(str) {
  return str.split(' ').map(function (v) { return v + ' ' + v.length })
}

console.log(addLength2('justin lee'))//,["apple 5", "ban 3"]);
console.log(addLength2('you will win'))//,["you 3", "will 4", "win 3"]);





//Problem 48
space();
console.log('Problem 48: charFreq')

function charFreq(str) {
  var obj = {};

  str = str.split('')
  for (var i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}

console.log(charFreq('hello'));
space();
console.log('HOF to solve problem 48')

function charFreq2(message) {
  return message.split('').reduce(function (acc, cur) {
    return (acc[cur] = (acc[cur] || 0) + 1) && acc;
  }, {});
}
console.log(charFreq2('toothless'));

//Problem 49 --------------------------------------------------------------------
space();
console.log('Problem 49: distinct Set----------------------------')

function distinct(a) {
  return Array.from(new Set(a));//<--Array.from makes it into an array  <--new Set searches through and make sure everything is unique
}

console.log(distinct([1]))//, [1]);
console.log(distinct([1, 2]))//, [1,2]);
console.log(distinct([1, 1, 2]))//, [1,2]);

//Problem 50 --------------------------------------------------------------------
space();
console.log('Problem 50: Rock Paper Scissors-------------------')

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };

  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

console.log(rps('rock', 'scissors'))
console.log(rps('rock', 'paper'))













