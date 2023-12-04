//write a program to find all prime number between 1 and 100 using for loop.
const num = 14;

let count =0;

for(let i=2; i<num/2; i++){
    if(num%i==0){
        count++;
    }
}
if(count===0){
    console.log("Its prime number");
}
else
    console.log("Its composit number");