// Example of function with peremeter but no return value.

let i=0;
const n = 5;
function mulTable(n){
    ++i;
    console.log(n+" * "+ i+ " = " + n*i);
}
for(let j=0; j<10;j++){     // function runs for 10 times.
    mulTable(n);            //function called.
}