const prompt = require("prompt-sync")();
let number;
number = prompt("Enter number:");
console.log("Entered number is : " + number);
let count = 0;
for (let i = 2; i < number; i++) 
{
    if (number % 2 == 0) 
    {
        count++;
    }
}
if (count == 0) {
    console.log("It is a prime number");
} else {
    console.log("It is not a prime number");
}