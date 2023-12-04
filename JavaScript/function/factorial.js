const n = 5
let total = 1;
function fact(n){
    while(n>=1){
        total *= n;
        n--;
    }
    return total;
}
console.log(fact(n));