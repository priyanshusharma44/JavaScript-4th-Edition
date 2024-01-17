// let mydate = new Date();
// console.log(mydate);

//convert to string
//more preci....
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

//to get type of
// console.log(typeof mydate); //object answer

// let mydatee = new Date(2023, 0, 17); // year month day
// console.log(mydatee.toDateString());

// let mydatee = new Date(2023, 1, 17, 4, 3, 24); // year month day
// console.log(mydatee.toLocaleString());

// //MMDDYY or YYDDMM
// let mydatee = new Date("2023-01-17"); // year month day
// let mydateea = new Date("01-17-2023"); // year month day
// console.log(mydatee.toLocaleString());
// console.log(mydateea.toLocaleString());

//timestamp
// let myTime = new Date(); // exact today date in milliseconds
// console.log(myTime.getTime()); // use getTime() instead of now()

// // Timestamp in seconds
// let timestampInSeconds = Math.floor(myTime.getTime() / 1000);
// console.log("Timestamp in seconds:", timestampInSeconds);

// // Convert to minutes
// let timestampInMinutes = Math.floor(timestampInSeconds / 60);
// console.log("Timestamp in minutes:", timestampInMinutes);

// // Convert to hours
// let timestampInHours = Math.floor(timestampInSeconds / 3600);
// console.log("Timestamp in hours:", timestampInHours);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//localString Interesting

newDate.toLocaleString("default", {
  weekday: "long",
});
