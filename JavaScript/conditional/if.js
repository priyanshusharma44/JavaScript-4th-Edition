//write a program that takes total mark as input and determines the letter grade based on the following scale using if else if statement
const num = prompt("Enter percentage: ");

let mark = parseInt(num);

if(mark>=90){
    console.log("Your grade is A");
}
else if(mark>=80 && mark<90){
    console.log("Your grade is B");
}
else if(mark>=70 && mark<80){
    console.log("Your grade is C");
}
else if(mark>=60 && mark<70){
    console.log("Your grade is D");
}
else{
    console.log("Your grade is F");
}