//Foreach ====>
// const number = [5,74,7,3,9,2,0,8];

// number.forEach(myFunction);

// function myFunction(value, index, array){
//     console.log(value);
// }

//Map ===>
const number = [5,74,7,3,9,2,0,8];

const newNumber =  number.map(myFunction);

function myFunction(value, index, array){
    // console.log(value*2);
    return value*2;
}
console.log(newNumber);

// number.map((value) =>{
//     console.log(value);

// })
// number.map((value) =>console.log(value))