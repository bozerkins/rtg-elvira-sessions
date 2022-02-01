// 3.Modify the previous program such that 
// only the users Alice and Bob are greeted with their names.

// let username = prompt('What\'s your name?');

// if (username === 'Alice' || username === 'Bob') {
//     console.log(`Hello, ${username}!`);
// } else {
//     console.log('I will not greet you!');
// }


// 3.1. Write a program, that asks for name, and if it's not
// Alice or Bob, ask for name again and again.

// let username = prompt('What\'s your name?');

// if (username == 'Alice' || username === 'Bob') {
//     console.log('Hello, ' + username);
// } else {
//     // ... ask again ?
// }

// let username = prompt('What\'s your name?');
// while (username !== 'Alice' && username !== 'Bob') {
//     username = prompt('Please be Alice or Bob! What\'s your name?');
// }

let username;
do {
    username = prompt('Please be Alice or Bob! What\'s your name?');
    console.log(`username=${username}`);
} while (username !== null && username !== 'Alice' && username !== 'Bob');

if (username !== null) {
    console.log(`Hello, ${username}`);
} else {
    console.log(`No username provided`);
}

// let username;

// username = 'Alice';
// console.log(
//     `username=${username}`, 
//     "username !== 'Alice' || username !== 'Bob'", 
//     username !== 'Alice' || username !== 'Bob'
// );

// username = 'Bob';
// console.log(
//     `username=${username}`, 
//     "username !== 'Alice' || username !== 'Bob'", 
//     username !== 'Alice' || username !== 'Bob'
// );

// username = 'SomeUserName';
// console.log(
//     `username=${username}`, 
//     "username !== 'Alice' || username !== 'Bob'", 
//     username !== 'Alice' || username !== 'Bob'
// );