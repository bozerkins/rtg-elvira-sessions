// 6. Write a program that asks the user for a 
// number n and gives them the possibility to 
// choose between computing the sum and computing the product of 1,…,n.

let number = prompt('Please enter the number.');
if (!number) {
    console.error('No number received.');
} else {
    let operation = prompt('Please enter "sum" or "product" to compute.');
    switch (operation) {
        case 'sum':
            let sum = 0;
            for (let i = 1; i <= number; i++) {
                sum += i;
            }
            console.log('Sum is ' + sum);
            break;
        case 'product': 
            let product = 1;
            for (let i = 1; i <= number; i++) {
                product *= i;
            }
            console.log('Product is ' + product);
            break;
        default:
            console.error('Invalid operation received. Should be "sum" or "product".');
    }
}

// let askNum = prompt("Please write a number");
// let answer1;
// let num1 = 0;
// if (askNum) {
//   answer1 = prompt("+ (sum) or * '(multiply)");
// }

// if (answer1 === "+") {
//   for (let index = 0; index <= askNum; index++) {
//     num1 += index;
//   }
// } else if (answer1 === "*") {
//   num1 = 1;
//   for (let index = 1; index <= askNum; index++) {
//     num1 *= index;

//   }
// }
// console.log(num1);