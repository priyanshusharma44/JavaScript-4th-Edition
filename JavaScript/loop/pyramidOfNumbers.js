//WAP to print a pyramid of number using a for loop
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
       let str = ' '.repeat(n - i);
       let str2 = 'n'.repeat(i * 2 - 1);
       console.log(str + str2 + str);
    }
 }
 
 pyramid(10);