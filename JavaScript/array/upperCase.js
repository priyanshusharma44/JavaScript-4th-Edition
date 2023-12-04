//Create an array of strings and use forEach() to create a new array with all the string in uppercase.

const cars = ["bugati","ferari","audi","nexion","volkswagen"];
console.log("Before ==>");
console.log(cars);
let newCars = [];
cars.forEach((value, index) =>{
    newCars[index] = value.toUpperCase();
})

console.log("After ==>");
console.log(newCars);