//write a program that takes a day of the week as input and outputs whether it's weekday or a weekend day using switch statement.
const day = prompt("Enter Day: ");

switch(day){
    case 'sunday':
        console.log("It's a weekday");
        break;
    case 'monday':
        console.log("It's a weekday");
        break;
    case 'tuesday':
        console.log("It's a weekday");
        break;
    case 'wednesday':
        console.log("It's a weekday");
        break;
    case 'thrusday':
        console.log("It's a weekday");
        break;
    case 'friday':
        console.log("It's a weekday");
        break;
    case 'saturday':
        console.log("It's a weekend");
        break;
    default:
        console.log("Enter valid days");
        break;

}