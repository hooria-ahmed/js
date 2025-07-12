// Dates

// declaring a date
let mydate = new Date()
console.log(mydate);

// Different Methods of Date printing on screen

console.log(mydate.toString()); // Converts date into string
console.log(mydate.toDateString()); // Converts date to Date String
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);


let myCreatedDate = new Date("01-14-2023") // we can also give our own date 
console.log(myCreatedDate.toLocaleString());


let mtTimeStamp = Date.now() // returns time in miliseconds
console.log(myTimeStamp);
console.log(myCreatedDtae.getTime()); // method to get timestamp of any date
console.log(Math.floor(Date.now()/1000)); // changing from mili seconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth) + 1; // keep in mind that month starts from 0
console.log(newDate.getDay()); // returns day of week in Number

// Customizing Locale String
newDate.toLocaleString('default', {weekday: "long", })









