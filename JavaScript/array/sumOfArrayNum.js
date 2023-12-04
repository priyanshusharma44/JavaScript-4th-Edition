//Create an array of numbers and use forEach() to calculate the sum of all the numbers in the array.

const arr = [3,6,8,1,2,3];let sum = 0;arr.forEach((value) =>{sum+=value;}) 
// console.log(sum);

const newArr1 = [4,5,[2,3,5],8]
const newArr2 = [9,10,[3,4,6],9]
// console.log(newArr[2]);
const oldArr = [1,2,...newArr1,...newArr2]; //sprade operator
console.log(oldArr);