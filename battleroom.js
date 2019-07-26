// DECIMALS 

const num1 = 0.2;
const num2 = 0.1;
const sumNum1And2 = num1 + num2;

console.log(sumNum1And2); // Expected result: 0.3

// WHAT?!
// Modify the code to get the expected result
//===================================================================

TRUE OR FALSE?

const false1 = Boolean(0 == false);

console.log(false1);

const false2 = Boolean("" == false);

console.log(false2);

console.log(parseInt(null, 24));

// Is that normal, or even true?
// Indicate if you agree with all, two, one, or none.
// Answer here:


//======================================================

// 2. Medium
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
// Expected Output: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
/* 
	Example #2:	
	let matrix = zeroArray(2, 5);
	console.log(matrix);
	Expected Output: [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]
*/

console.log(matrix);