const prompt = require("prompt-sync")();
let year;
year = prompt("Enter the year:");
console.log("The entered year is: ", year);
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("It is a leap year");
} else {
    console.log("It is not a leap year");
}