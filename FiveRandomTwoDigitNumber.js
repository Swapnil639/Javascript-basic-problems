function generateFiveRandomTwoDigitNumber(){
    let array = [];
for(let i=1;i<6;i++){
    let min = 10;
    let max = 99;
    let number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(number1);
}
return array;
}

function sumOfNumbers(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    } 
    return sum;
}
console.log("Five random numbers of 2 digit are as follows:");
let array = generateFiveRandomTwoDigitNumber();
console.log(array);
console.log("The sum of five random, two digit number's is as follows:");
console.log(sumOfNumbers(array));
let average = sumOfNumbers(array)/5;
console.log("Average of 5 random 2 digit numbers is: "  +average);