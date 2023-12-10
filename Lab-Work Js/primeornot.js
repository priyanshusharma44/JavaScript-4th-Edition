let i;
let flag = 0;
let num = prompt("Enter The Number:");

for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        flag = flag + 1;
       
    }
}

if (flag == 2) {
    console.log("It is a Prime Number:", num);
} else {
    console.log("It is not a Prime Number:", num);
}
