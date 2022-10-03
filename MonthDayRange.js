const prompt = require("prompt-sync")();
let month;
let day;
month = prompt("Enter the month:");
console.log("The entered month is: ", month);
day = prompt("Enter the day:");
console.log("The entered day is: ", day);
if ((month == 3 && day >= 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day <= 20)) {
    console.log("The day lies in the given month : True");
} else {
    console.log("The day lies in the given month : False");
}