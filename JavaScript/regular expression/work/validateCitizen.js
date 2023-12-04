//Write a javascript that accepts Username and citizenship number as input texts. when the user enters citizenship number and displays whether citizenship number is valid or not. (assume valid citizenship fotmat to be nn-nn-nn-nnnnn.)

const userName = "sagun basnet";
const citiNum = "01-02-45-1432545";
const patten = /^\d{2}-\d{2}-\d{2}-\d{5}$/;

if(patten.test(citiNum)){
    console.log("citizenship number is Valid");
}
else
    console.log("citizenship number is Invalid");