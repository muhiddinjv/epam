const arr = [1, 2, 3, 4, 5, 6, 7];

// return odd numbers thru filter
const newArr1 = arr.filter(a => a % 2 === 1);

// return even numbers thru filter
const newArr2 = arr.filter(a => a % 2 === 0);

// map's purpose is to turn each element from the original array into a new element & make a new array. It uses 1 callback "a".
const newArr3 = arr.map(a => a * 10);

console.log(newArr3);
