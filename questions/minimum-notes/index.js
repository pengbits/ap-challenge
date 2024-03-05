const fs = require('node:fs');
const defaultInput = 70
const customInput = process.argv[2]

// the denominations of currency we can use
const denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
const size = denominations.length;

// determine input
let input
if (customInput == undefined){
  input = defaultInput
} else {
  try {
    input = Number(customInput)
  } catch (e){
    console.log('an error occurred, please check that you provided a valid number as input', e)
  }
}

function getMinimumNotes(value){
  let answer =[];
  
  // iterate over all denominations, starting with largest first
  for(let d=size-1; d >=0; d--){
    // chip away at the value, using the current denomination (note/coin)
    while(value >= denominations[d]){
      value -= denominations[d]
      // keep track of the denomination we used in this loop
      answer.push(denominations[d])
    }
  }
  console.log(`The minimum coins/bills needed for ${input} is ${answer.join(', ')}`)
  console.log(`output: ${answer.length}`)
  
}

getMinimumNotes(input)