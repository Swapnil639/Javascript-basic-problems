const IS_HEAD = 1;
const IS_TAIL = 0;
let head = 0;
let tail = 0;
let i = 0;
while (i < 11) {
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip == IS_HEAD) {
        console.log("It is Head");
        head++;
        i++;
    } else {
        console.log("It is Tail");
        tail++;
        i++;
    }
} 