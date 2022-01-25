// find if there is a number, that can be 
// divided by 21 in the range (startNumber - endNumber)

let startNumber = 56;
let endNumber = 61;

console.log(`Number range ${startNumber} - ${endNumber}`);
// 56, 57, 57, 58, 59, 60, 61

let countNumbersDevidedBy21 = 0;
for(let number = startNumber; number <= endNumber; number++) {
    let reminder = number % 21;

    if (reminder === 0) {
        countNumbersDevidedBy21 += 1;
    }
}
console.log('Is there a number, that can be divided by 21?');
console.log(`Count of numbers that can be devide by 21: ${countNumbersDevidedBy21}`);
if (countNumbersDevidedBy21 > 0) {
    console.log('Answer: yes');
} else {
    console.log('Answer: no');
}