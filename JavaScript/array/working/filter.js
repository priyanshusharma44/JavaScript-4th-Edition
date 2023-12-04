//create an array of strings and use the filter() method to filter out strings that have a length less than 5. print the filtered array.
const cars = ["bugati","ferari","audi","nexion","volkswagen"];


let newCars = cars.filter((value) =>{
    if(value.length < 5){
        return value;

    }
})
console.log(cars);
console.log("=============");
console.log(newCars);