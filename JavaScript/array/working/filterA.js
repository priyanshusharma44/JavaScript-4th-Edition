const cars = ["bugati","ferari","audi","nexion","volkswagen"];


let newCars = cars.filter((value) =>{
    if(value.charAt(0) === 'a' || value.charAt(0) === 'A'){
        return value;
    }
})
console.log(cars);
console.log("=============");
console.log(newCars);