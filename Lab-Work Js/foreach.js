// Create an array of numbers
const numbers = [2, 5, 8, 11, 14, 17, 20, 23];

let s = numbers.forEach(myfunction);
// Use forEach to print all the even numbers
function myfunction(value, index, array) {
  if (value % 2 === 0) {
    console.log(value);
  }
}
