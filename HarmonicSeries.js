const prompt = require("prompt-sync")();
let number;
number = prompt("Enter number:");
console.log("Entered number is : " + number);
let result = 0.0;
while (number > 0) {
    result = result + 1 / number;
    number--;
}
console.log("Summation of harmonic series is: " + result);