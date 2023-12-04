//5. Create an array of objects representing books, where each object has a title and author property.Use the reduce() method to create a new object that counts the number of books written by each author. Print the new object.
const myBook = [
    {
        title: "purano katha",
        author: "Sujan Pradhan"
    },
    {
        title: "naya katha",
        author: "aunchung younga"
    },
    {
        title: "serish ko phul",
        author: "aunchung younga"
    },
    {
        title: "seto bagh",
        author: "aunchung younga"
    },
]



const countAuthor = myBook.reduce((count,value) =>{
    if(value.author in count){
        count[value.author]++;
    }
    else{
        count[value.author] = 1;
    }
    return count;
},{});


console.log(countAuthor);