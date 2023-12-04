//WAP that checks whether a given number is even or odd using the % operator. take the value of the number as input from the user and display the result on the console.

const num = prompt("Enter number: ");

let first = parseInt(num);

const rem = first%2;

let result = (rem>0) ? "the number is Odd":"The number is Even";

console.log(result);