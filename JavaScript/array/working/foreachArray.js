// 1. Create an array of numbers and use forEach() to print all the even numbers in the array.
const number = [5,74,7,3,9,2,0,8];

number.forEach(myFunction);
function myFunction(value){
    if(value%2==0){
        console.log(value);
    }
}