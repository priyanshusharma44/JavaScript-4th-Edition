//lenght array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//tostring() array (comma separated) array values.
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
stringg = fruitss.toString();
console.log(stringg);

// array at
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

//to get element
const frut = ["Banana", "Orange", "Apple", "Mango"];
let fru = frut[2];
console.log(frut);

//join()
const frt = ["Banana", "Orange", "Apple", "Mango"];
m = frt.join(" * ");

//to pop
const fruis = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruis);
fruits.pop();
console.log(fruis);

//push
const frui = ["Banana", "Orange", "Apple", "Mango"];
frui.push("Kiwi");
console.log(frui);

//shift
const fs = ["Banana", "Orange", "Apple", "Mango"];
fs.shift();
console.log(fs);

//unshift = agadi lagxa
const frits = ["Banana", "Orange", "Apple", "Mango"];
console.log(frits);
frits.unshift("Lemon");
console.log(frits);

//change index values
const fits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fits);
fits[0] = "Kiwi";
console.log(fits[0]);
console.log(fits);

//array lenght
const s = ["Banana", "Orange", "Apple", "Mango"];
console.log(s);
s[s.length] = "Kiwi";
console.log(s[s.length]);

//Using delete() leaves undefined holes in the array.

//Use pop() or shift() instead.

//concat() in array to add

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// merge three aray
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildre = arr1.concat(arr2, arr3);
console.log(myChildre);

//concat() add string
const myArray = ["Emil", "Tobias", "Linus"];
const myChildrn = myArray.concat("Peter");
console.log(myChildrn);

//Array copyWithin()
const fis = ["Banana", "Orange", "Apple", "Mango"];
fis.copyWithin(3, 0);
console.log(fis);
//Copy to index 2, all elements from index 0:

//Array copyWithin()
const ps = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(ps);
ps.copyWithin(2, 0, 3);
console.log(ps);
//Copy to index 2, the elements from index 0 to 3:

//JavaScript Array flat()
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();
console.log(newArr);

//Splicing and Slicing Arrays
//The splice() method adds new items to an array.

//The slice() method slices out a piece of an array.

const oi = ["Banana", "Orange", "Apple", "Mango"];
oi.splice(2, 0, "Lemon", "Kiwi");
console.log(oi);

//The first parameter (2) indicates the index at which the changes should begin. In this case, it is the index 2, which corresponds to the third element in the array ("Apple").

//The second parameter (0) indicates the number of elements to remove from the array. In this case, it is 0, meaning no elements are removed.

const ss = ["Banana", "Orange", "Apple", "Mango"];
ss.splice(2, 2, "Lemon", "Kiwi");
console.log(ss);

//splice() to remove
const sts = ["Banana", "Orange", "Apple", "Mango"];
console.log(sts);
ms = sts.splice(0, 1);
console.log(ms);
console.log(sts);

//The first parameter (0) is the starting index from where elements should be removed.
//The second parameter (1) is the number of elements to be removed.

//JavaScript Array toSpliced()
/*
The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
*/

const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months);
const spliced = months.toSpliced(0, 1);
console.log(spliced);

//JavaScript Array slice()
//agadi ko hatauxa
const fss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fss.slice(1);
console.log(citrus);

// another
//The method then selects elements from the start argument, and up to (but not including) the end argument.
const frusss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const cirus = frusss.slice(1, 3);
console.log(cirus);

//Automatic toString()
//JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
const ts = ["Banana", "Orange", "Apple", "Mango"];
console.log(ts.toString());
//yesma we cant use other variable to store data

//.................................................
//....................................................
//......................................................

//JavaScript Array sort()
const fit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fit);
fit.sort();
console.log(fit);

//reverse
const ser = ["Banana", "Orange", "Apple", "Mango"];
console.log(ser);
ser.sort();
console.log(ser);
ser.reverse();
console.log(ser);

// Sort numbers in ascending order:

const points = [40, 100, 1, 5, 25, 10];
console.log(points);
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

/*
If the comparison function returns a negative value (a - b is negative), it means that a should come before b in the sorted array.
If the comparison function returns a positive value (a - b is positive), it means that b should come before a in the sorted array.
If the comparison function returns zero (a - b is zero), it means that the order of a and b doesn't change.
*/

//descending
const ponts = [40, 100, 1, 5, 25, 10];
console.log(ponts);
points.sort(function (a, b) {
  return b - a;
});
console.log(ponts);

//Find the lowest value:
const poin = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
poin.sort(function (a, b) {
  return a - b;
});

let lowest = poin[0];
console.log(lowest);
poin.sort(function (a, b) {
  return b - a;
});
console.log(poin);
let highest = poin[5];
console.log(highest);
