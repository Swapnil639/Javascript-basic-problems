const prompt = require("prompt-sync")();
let number1;
number1 = prompt("Enter number 1:");
console.log("Entered number 1 is : " + number1);
number2 = prompt("Enter number 2:");
console.log("Entered number 2 is : " + number2);
console.log("The prime numbers are: ");
for (let i = number1; i < number2;i++){
    let count =0;
    for(let j=2 ;j<=i/2;j++){
        if(i% j==0){
            count++;
        }
    }
    if(count==0){
        console.log(i)
    }
}