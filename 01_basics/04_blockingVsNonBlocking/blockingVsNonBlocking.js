const fs = require('fs')

//blocking 
console.log('1');
console.log(fs.readFileSync('contacts.txt', 'utf-8'))  //code below is not executed untill it compeletes
console.log('2');
console.log('3');
console.log('4');

//non-blocking
console.log('1');
console.log(fs.readFile('contacts.txt', 'utf-8', (err) => {}))  //code below is executed even if this is not executed
console.log('2');
console.log('3');
console.log('4');