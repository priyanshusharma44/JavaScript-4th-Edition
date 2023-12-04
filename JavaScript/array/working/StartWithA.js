//Create an array of strings and use the filter() method to filter out the string that starts with letter A.
const cars = ["augati","ferari","audi","nexion","volkswagen"];

let newCars = cars.filter((value) =>{
    if(value.charAt(0) === 'a'){
        return value;

    }
})
console.log(cars);
console.log("=============");
console.log(newCars);