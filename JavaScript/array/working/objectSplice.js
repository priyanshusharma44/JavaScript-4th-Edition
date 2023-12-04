// 4. Create an array of objects representing books, where each object has a title and author property. Use splice() to remove the second book from the array. Print the modified array.

const myBook = [
    {
        title: "purano katha",
        author: "Sujan Pradhan"
    },
    {
        title: "naya katha",
        author: "aunchung younga"
    },
]

myBook.splice(1,1);
console.log(myBook);