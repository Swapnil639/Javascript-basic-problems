let array = [];
for(let i=1;i<6;i++){
    let min = 100;
    let max = 999;
    let number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(number1);
}
console.log("The 3 digit five random numbers are: " + array);
console.log("Max number is:")
console.log(Math.max.apply(Math,array));
console.log("Min number is:")
console.log(Math.min.apply(Math,array));