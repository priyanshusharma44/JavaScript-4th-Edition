//WAP that takes two numbers as input from the user and per forms addition, subtraction, multiplication, and division operations on them. Display the results of each operation in console.

//Hints for user input use prompt().

const firstNum = prompt("Enter first number.");
const secondNum = prompt("Enter second number.");

var first = parseInt(firstNum);
var second = parseInt(secondNum);

const mul = first * second;
const div = first / second;
const add = first + second;
const sub = first - second;

console.log("Multiplication = "+mul);
console.log("Division = "+div);
console.log("Addition = "+add);
console.log("Subtraction = "+sub);