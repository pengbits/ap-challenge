const fs = require('node:fs');
const defaultInput = [3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]];
const inputpath = process.argv[2]

// determine input
let input
if(inputpath == undefined){
  input = defaultInput
} else {
  try {
    const data = fs.readFileSync(inputpath, 'utf8').split("\n");
    // example input
    // 4
    // 1 2 3 4
    // 5 6 7 8
    // 9 7 9 7
    // 3 2 3 2 
    input  = [Number(data[0]), data.slice(1).map(row => row.split(' ').filter(d => d !== '').map(n => Number(n)))]
  } catch (e){
    console.log('an error occurred, please check that you provided a valid input file', e)
  }
}
// the solution code
function getDiagonalSums(size, arr) {
  let principal = 0;
  let secondary = 0;
  for (let col = 0; col < size; col++){
    // in the principal diagonal, rows and columns increment at same pace, so reuse the row value
    principal += arr[col][col]
    // in the secondary diagonal, the row value is reduced at same rate as column's increasing,
    // so we subtract the current column from the overall size, and subtract 1 to get the zero-indexed row value.
    secondary += arr[col][size - col - 1]
  }
  console.log(`Principal Diagonal: ${principal}`)
  console.log(`Secondary Diagonal: ${secondary}`)
}

getDiagonalSums(input[0], input[1])