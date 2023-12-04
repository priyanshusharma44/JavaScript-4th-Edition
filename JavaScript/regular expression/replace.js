const regex = /ox/g;
const string = "The ox national animal of nepal is ox";
// console.log(string.replace(ox, "Cow")); //replace first word only

console.log(string.replace(regex, "Cow")); //replace all word in the string