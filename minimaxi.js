// Mini Maxi

// Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
// */



// function minMax(arrays){
//     let arrays = [3, -1, 5, -9, -5, 7]
//     let minArray = Math.min(arrays);
//     let maxArray = Math.max(arrays);
//     let minMax = [];
//     minMax.push(minArray);
//     minMax.push(maxArray);
//     return minMax;
// }

// console.log([3, 5]);
minMax([32, 45, 677, 12, 53]);

function minMax(arr) {
    return [Math.min(arr),Math.max(arr)];
  }
  


//  console.log(minMax[3,2])