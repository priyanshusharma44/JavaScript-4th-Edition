// Day 1: Introduction to JavaScript

// 1. Alert Use
alert("Are You Sure ?");

// 2. Console Log
console.log("Jay Nepal");

// 3. Variables
fName = "Priyanshu";
age = 22;
console.log(fName);
console.log(age);

// 4. Null and Undefined
x = null;
y = undefined;
console.log(x);
console.log(y);

// 5. Boolean
isFollow = true;
console.log(isFollow);

// 6. Keywords (var, let, const)
//    a. Let [Cannot be redeclared but can be updated. A Block Scope]
//    b. Var [Can be redeclared and updated. Global Scope]
//    c. Const [Cannot be redeclared or updated. A Block Scope]
var a = 10;
var b = 20;
console.log(b);

let agx = 20;
agx = 21;
agx = 22;
console.log(agx);

// 7. Block Scope and Global Scope
{
  let xd = 10;
  console.log(a);
}
let xd = 20;
console.log(a);

// 8. Data Types
let ma = 24;
console.log(ma);
let xa = typeof ma;
console.log(xa); //number

let ram = null;
console.log(ram);
let mom = typeof ram;
console.log(mom); // null means absent of an object

// 9. Non-primitive Data Types (Object, Array, Function)
const max = {
  name: "Ram",
  roll: 12,
};
console.log(max);

console.log(max.name);
console.log(max["roll"]);

max.roll = max.roll + 1;
console.log(max);

max["roll"] = max["roll"] + 1;
console.log(max);
console.log(max["roll"]);

// Operators
let s = 10;
let sy = 20;
console.log("The Addition of s and sy is =", s + sy);
console.log("The Division of s and sy is =", s / sy);
console.log("The Mod of s and sy is =", s % sy);
console.log("The Expo(Power) of s and sy is =", s ** sy);

// Control Structures and Functions

// Conditional Statements
if (s < sy) {
  console.log("s is less than sy");
} else {
  console.log("s is greater than sy");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Index:", i);
}

// Do-while loop
let j = 0;
do {
  console.log("Do-While Index:", j);
  j++;
} while (j < 5);

// While loop
let k = 0;
while (k < 5) {
  console.log("While Index:", k);
  k++;
}

// Creating an array
let fruits = ['apple', 'banana', 'orange'];

// Accessing elements of an array
console.log(fruits[0]); // Output: 'apple'

// Modifying elements of an array
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Array methods
console.log(fruits.length); // Output: 3
fruits.push('pear'); // Add element to end
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'pear']

// Function declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}

// Function call
console.log(greet('John')); // Output: 'Hello, John!'

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
//onclick
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Click Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>

    <script>
        // Get the button element
        const button = document.getElementById('myButton');

        // Add click event listener
        button.addEventListener('click', function() {
            console.log('Button clicked!');
            // You can perform any action here
        });
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color Example</title>
</head>
<body>
    <button id="colorButton">Change Color</button>

    <script>
        const colorButton = document.getElementById('colorButton');

        colorButton.addEventListener('click', function() {
            document.body.style.backgroundColor = getRandomColor();
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color Example</title>
</head>
<body>
    <button id="colorButton">Change Color</button>

    <script>
        const colorButton = document.getElementById('colorButton');

        colorButton.addEventListener('click', function() {
            document.body.style.backgroundColor = getRandomColor();
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    </script>
</body>
</html>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Example</title>
</head>
<body>
    <button id="incrementButton">Increment</button>
    <p id="counter">0</p>

    <script>
        const incrementButton = document.getElementById('incrementButton');
        const counterElement = document.getElementById('counter');
        let counterValue = 0;

        incrementButton.addEventListener('click', function() {
            counterValue++;
            counterElement.textContent = counterValue;
        });
    </script>
</body>
</html>




// Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Calling the function and storing the result in a variable
let area = calculateArea(5, 3);
console.log("Area of the rectangle:", area);

// Object-Oriented Programming Concepts and Event Handling

// Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

// Event Handling
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// Day 2: Intermediate JavaScript and Introduction to PHP
// (Continuation within the same file)

// Dive Deeper into JavaScript

// Arrays
const colors = ["red", "green", "blue"];
console.log(colors);

// Example 1: Using push() to add elements to the array
colors.push("yellow", "orange");
console.log(colors); // Output: ["red", "green", "blue", "yellow", "orange"]

// Example 2: Using pop() to remove the last element from the array
let removedColor = colors.pop();
console.log("Removed Color:", removedColor); // Output: "orange"
console.log(colors); // Output: ["red", "green", "blue", "yellow"]

// DOM Manipulation
document.getElementById("myDiv").innerHTML = "Modified Text";

// Example 1: Changing the text content of an element
document.getElementById("myHeading").textContent = "New Heading Text";

// Example 2: Adding a new element to the DOM
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

document.getElementById("myDiv").appendChild(newParagraph);

// Example 3: Removing an element from the DOM
let elementToRemove = document.getElementById("myElementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);

/*
In Example 1, the textContent property of an element with the id "myHeading" is modified to change its text content to "New Heading Text".

In Example 2, a new <p> element is created using document.createElement(), and its text content is set. Then, the new paragraph element is appended as a child of an element with the id "myDiv".

In Example 3, an element with the id "myElementToRemove" is removed from the DOM by selecting its parent node and then using the removeChild() method to remove the specified child element.

*/

// Intermediate JavaScript ends here

// Introduction to PHP
// (PHP code snippets can be added in PHP files, not directly within JavaScript)
