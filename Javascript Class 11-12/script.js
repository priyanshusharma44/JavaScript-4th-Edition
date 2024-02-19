//js theory need ...
//Js extenstion .js
//1. Alert Use
alert("Are You Sure ?");

//2.
console.log("Jay Nepal");

//3. variable (1st from browser and then from here)

fName = "Priyanshu";
age = 22;
console.log(fName);
console.log(age);

//4. Null and undefine
x = null;
y = undefined;
console.log(x);
console.log(y);

//5.
isFollow = true;
console.log(isFollow);

//Case Sensitive

//6.Keywords (var,let,const)

//a. Let [Cant be redeclared but can be updated. A Block Scope]
//b. Var [can be redeclared and can also be updaed. Global Scope]
//c. Const [cant be redeclared or updated. A block Scope]

var a = 10;
var b = 20;
console.log(b);

//bad way cause memory space is highly used
//so use let but let cant be redeclared line below
/*
let a=10;
let a=10;




*/
let agx = 20;
agx = 21;
agx = 22;
console.log(agx);

//const need to given a value and a fixed value . null cant be give
let m;
console.log(m);
//undefined comes

// const av;
// console.log(av);
//error comes

//8.
//block scope and global scope
{
  let xd = 10;
  console.log(a);
}
let xd = 20;
console.log(a);

//datatype
let ma = 24;
console.log(ma);
let xa = typeof ma;
console.log(xa); //number

//9.number,string,boolean,null etc

let ram = null;
console.log(ram);
let mom = typeof ram;
console.log(mom); // null means absent of an object

//10. Non primitive (Object , Array, Function)
//object = key value and we use const
//at last semicolon
const max = {
  name: "Ram",
  roll: 12,
};
console.log(max);

//use dot operator for specific value fetching or use []
console.log(max.name);

//or use
console.log(max["roll"]);

//if we wanna increase the objects age value

max.roll = max.roll + 1;
console.log(max);

//or also using
max["roll"] = max["roll"] + 1;
console.log(max);
//specific value
console.log(max["roll"]);

//operators

//last topic

//and , or  , not ,
//+ , - , * , /

let s = 10;
let sy = 20;
console.log("The Addition of s and sy is  =", s + sy);
console.log("The Division of s and sy is  =", s / sy);
console.log("The Mod of s and sy is  =", s % sy);

//Exponential we use ** a**b = a to the power b
console.log("The Expo(Power) of s and sy is  =", s ** sy);
