// const weight = prompt("Enter weight pound: ");
// const height = prompt("Enter height in inch: ");
let wei = 62;
let hei = 1.64592;

let bmi = (wei/(hei*hei));

console.log("Your BMI is "+bmi.toFixed());

if(bmi<18.5){
    console.log("Your are under weighted");
}
else if(bmi>18.5 && bmi<24.9){
    console.log("Your have normal weight");
}
else if(bmi>25 && bmi<29.9){
    console.log("Your are over weighted");
}
else{
    console.log("Obesity");

}


