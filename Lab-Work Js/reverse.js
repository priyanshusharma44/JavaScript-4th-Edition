let n=prompt("Enter A Name:"); // RAMOS = 5 character and 4 index
let r=""; // r= blank 
let i=n.length-1; // i= RAMOS.lenght -1 -> RAMOS = 5 and lenght -1 = 5-1 = 4 index which is S 

do{
    r=r+n[i]; // any how /......,..... r= "" + RAMOS[4] = S ...so intially r = S 
    i--; // i=3
   
}
while(i>=0)   // 3>=0 ? 
console.log(r); // S and repeat same 
