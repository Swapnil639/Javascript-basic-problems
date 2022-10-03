const prompt = require("prompt-sync")();
let number;
number = prompt("Enter number:");
console.log("Entered number is : " + number);
let i, factorial = 1;
for (i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log("Factorial of " + number + " is: " + factorial);     
