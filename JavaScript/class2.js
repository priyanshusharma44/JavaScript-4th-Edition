//WAP a program that takes a number as input from the user and calculates its square, cube and square root, Display the results in the console.
//Hints for user input use prompt().

const firstNum = prompt("Enter number.");

let first = parseInt(firstNum);

const square = first**2;
const cube = first**3;
const sqrt = Math.sqrt(first);

console.log("Square = "+square);
console.log("Cube = "+cube);
console.log("Square root = "+sqrt);