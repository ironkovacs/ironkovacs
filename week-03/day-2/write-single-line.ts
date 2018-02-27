'use strict';
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
let myName: string = 'asdfjahfél hhsg 44!!!!!!NÉGY!';
let myFileName: string = 'my-file.txt'


try {
  fs.writeFileSync('my-file.txt', (fs.readFileSync(myFileName, 'utf-8')) + '\n' + myName);
}
catch(err) {
 console.log('Unable to open/write file: ', `${myFileName}`)
}
