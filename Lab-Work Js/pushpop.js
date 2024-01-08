const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

console.log("Original array:");
console.log(people);

// Add a new person to the array using push()
const a = { name: "PRIYANSHU", age: 21 };
people.push(a);

// Display the array after adding a new person
console.log("\nArray after adding a new person:");
console.log(people);

// Remove the last person from the array using pop()
const removedPerson = people.pop();

// Display the array after removing the last person
console.log("\nArray after removing the last person:");
console.log(people);

// Display the removed person
console.log("\nRemoved person:");
console.log(removedPerson);
