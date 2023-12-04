let w = 62;
let h = 1.64592;

function bmi(h,w){
    let bmi = (w/(h*h));
    return bmi;
}

const result = bmi(h,w);

console.log(result);
if(result<18.5){
    console.log("Your are under weighted");
}

else if(result>18.5 && result<24.9){
    console.log("Your have normal weight");
}

else if(result>25 && result<29.9){
    console.log("Your are over weighted");
}

else{
    console.log("Obesity");
}
