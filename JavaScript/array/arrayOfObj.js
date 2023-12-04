//Create an array of objects representing people, where each object has a name and age properly. use push() to add a new person to the array, and use pop() to remove the last person from the array.

const arr = [{name: 'hari' , age: 12},{name: 'ram' , age: 20},{name: 'sita' , age: 19}];

console.log("Before operation...");
console.log(arr);

arr.push({name: 'gita', age: 18});
console.log("After push...");
console.log(arr);

arr.pop();
console.log("After pop...");
console.log(arr);