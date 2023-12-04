//Create an array of strings and use shift() to remove the first element from the array. Then, use unshift() to add a new string to the beginning of the array.

const arr = ["Bugati", "BMW", "VW","Range Rover"];
console.log("Before Operation");
console.log(arr);
arr.shift()
console.log("After shift()");
console.log(arr);
arr.unshift("Farari");
console.log("After unshift()");
console.log(arr);