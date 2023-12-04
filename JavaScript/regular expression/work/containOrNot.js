//Write a javascript to test if string contains the letter /a/ or /c/ both.

const letter = "sagun's car";
const patt1 = /a/;
const patt2 = /c/;

if(patt1.test(letter) && patt2.test(letter)){
    console.log("Yes it contain both a and c");
}
else if(patt1.test(letter) || patt2.test(letter)){
    console.log("Yes it contain a or c");
}
else{
    console.log("Does not contain any.");
}
