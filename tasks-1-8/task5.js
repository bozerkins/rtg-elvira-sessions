// 5.Modify the previous program such 
// that only multiples of three or five are considered in the sum,
//  e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

let input = prompt('Please inter a number "N"');
let number = Number(input);

// let numberSum = 0;
// for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         numberSum += i;
//     }
// }
// console.log(`Sum = ${numberSum}`);

let numberSum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        // ... skip to next number
        console.log(`Skipping ${i}`);
        continue;
    }
    console.log(`Adding ${i}`);
    // add number to sum
    numberSum += i;
}
console.log(`Sum = ${numberSum}`);