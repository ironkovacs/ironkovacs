
'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];


function quoteSwap(string: string[]) {
  let tempA: string[] = [];
  let tempS: string = '';
  tempA.push(words[2], words[5]);
  string.splice(2, 1, tempA[1]);
  string.splice(5, 1, tempA[0]);
  for (let i = 0; i < string.length; i++){
    tempS = `${tempS}` + ' ' + `${string[i]}`;
  }
  return tempS;
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;