let newObj1 = {
  name: "hello1",
  "roll no": 1,
}; //its block {}
console.log(newObj1.name);

let newarr = [newObj1];
//let var
function test() {
  var a = 1;
  if (true) {
    var a = 2; //  let block space only inside block var global scope
    console.log(a, "this is a");
  }
  console.log(a, "this is out block");
}
test();

//........................

function callMyGf() {
  //its argument cause cant change
  return "I love You";
}

function call(callMyGf) {
  return callMyGf();
}

const ok = (a, b) => {
  //=> means return
  a + b;
}; //ananymos function (Arrow function) it doesnt have name

function sum(a, b) {
  return a + b;
}

//HIGHEST ORDER FUNCTION

/*let newar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newar.lenght, "this is lenght");
newar.forEach((item, index) => {
  console.log(item, index);
});
*/
let newar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a = "im not four";
console.log(a);
console.log(newar.lenght, "this is lenght");
newar.forEach((item, index) => {
  if (item === 4) a = "im four";
  console.log(a);
});

//map

let mapdata = newar.map((item) => {
  return item + 2;
});
console.log(newar, "ORIGINAL");
console.log(mapdata, "MAPDATA");
//map return new array. it returns array
//foreach iterate and do not return

//filter
let filterData = newar.filter((item) => item % 2);
console.log(filterData, "filter Data");
console.log(newar);

//splice - main arry gets manipulated .we can add item remove
let r = newar.slice(3, 8);
console.log(newar);
console.log(r, "slicedata");
