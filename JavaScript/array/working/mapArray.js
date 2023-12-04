// 3. Create an array of strings and use map() to create a new array where each string is capitalized. Print the new array.

const cars = ["bugati","ferari","audi","nexion","volkswagen"];

const newCars = cars.map((value) =>{
    return value.toLocaleUpperCase();
})

console.log(newCars);