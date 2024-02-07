// Select element h4 which holds text of "Red" by using getElementsByTagName
const redH4 = document.getElementsByTagName("h4")[0];
console.log(redH4.textContent);

// Select div with the class of "green" which holds text (Green) by using getElementsByTagName
const greenDiv = document.getElementsByClassName("green")[0];
console.log(greenDiv.textContent);

// Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
const blueDiv = document.getElementsByClassName("blue")[0];
console.log(blueDiv.textContent);

// Select div which has the class & Id of "yello" by using querySelector()
const yellowDiv = document.querySelector(".yello");
console.log(yellowDiv.textContent);

// Select all the elements which has the class of "teal" by using querySelectorAll
const tealElements = document.querySelectorAll(".teal");
tealElements.forEach((element) => {
  console.log(element.textContent);
});
