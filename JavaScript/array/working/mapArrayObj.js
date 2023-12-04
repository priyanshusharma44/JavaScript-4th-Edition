

// 7. Create an array of objects representing students, where each object has a name and age property. Use map() to create a new array containing only the names of the students. Print the new array.

const myArrObj = [
    {
        name: "sujan",
        age: 23
    },
    {
        name: "jhone",
        age: 25
    }
]

const myNewArrObj = myArrObj.map((value) =>{
    return value.age;
})
console.log(myNewArrObj);