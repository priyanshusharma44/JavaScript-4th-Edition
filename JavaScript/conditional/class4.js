const num = prompt("Enter number: ");

let first = parseInt(num);

const rem = first%2;

if(rem>0){
    console.log("The number is Odd");
}
else
    console.log("The number is Even");
