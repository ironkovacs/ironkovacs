'use strict';
// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

const fs = require('fs');
let myFileName = 'my-file.txt';

function param(path: string, word: string, number: number) {
  let string: string ='';
  for (let i: number = 0; i < number; i++) {
    string += word + '\n';
  }
  return fs.writeFileSync(path, (fs.readFileSync(path, 'utf-8')) + '\n' + string);
}

try {
  param(myFileName, 'asdad23423423', 2);
}
catch (err) {

}