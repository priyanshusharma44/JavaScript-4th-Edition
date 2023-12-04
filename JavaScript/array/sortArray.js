//String sorting ===>
console.log("String sorting ===>");
const cars = ["bugati","ferari","audi","volkswagen","nexion"];
cars.sort();
// cars.reverse();
console.log(cars);


console.log(" ");
console.log(" ");



//Number sorting ===>
console.log("Number sorting ===>");
const number = [5,74,7,3,9,2,0,8];
// number.sort(function(a,b){return a - b}); //ass order
number.sort(function(a,b){return b - a}); //dec order
console.log(number);