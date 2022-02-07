//7. Write a program that prints a multiplication 
// table for numbers up to 12.

for(let row = 1; row <= 12; row++) {
    let line = '';
    for(let col = 1; col <= 12; col++) {
        if (col === 1) {
            line += (row * col);    
        } else {
            line += "\t" + (row * col);
        }
    }
    console.log(line);
}

// for (let row = 1; row <= 12; row++) {
//     let line = [];
//     for (let col = 1; col <= 12; col++) {
//         line.push(row * col);
//     }
//     let lineNicePrint = line.join("\t");
//     console.log(lineNicePrint);
// }


// TODO: show variant with object