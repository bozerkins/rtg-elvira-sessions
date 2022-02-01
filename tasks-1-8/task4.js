// 4.Write a program that asks the user for 
// a number n and prints the sum of the numbers 1 to n

let input = prompt('Please inter a number "N"');
console.log(input, typeof input);

// check if user clicked cancel
if (input === null) {
    console.log('User did not provide a number');
} else {
    let number = Number(input);
    console.log(number, typeof number);

    if (isNaN(number) === true) {
        console.log('User provided invalid number');
    } else {
        // runs only when 'number' is a valid number
        let numberSum = 0;
        for (let i = 1; i <= number; i++) {
            numberSum += i;
        }
        console.log(`Sum = ${numberSum}`);
    }
}


// let num = prompt("Please write a number");
// let num1 = 0;

// for (let index = 0; index <= num; index++) {
//   num1 += index;
// }
// console.log(num1);