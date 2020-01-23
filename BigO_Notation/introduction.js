// Big O Allows us to compare code with regard to its performance and efficiency. Which algorithm is best. It helps us understand tradeoffs between different approaches
// Allows us to identify inefficient points in code therefore easily identifying points that might fail and pin point them ineffectively.
// Important for interviews

// Find the sum of all numbers from 1 to and including n
// Big O of n O(n) as n increases, runtime increases in a linear proportion
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
  /*
    Operations
    Since it is a loop, there are n operations generally for each run. That is n addition operations, n assignment operations. Each of these operations occur each time the function runs. There is also a single assignment of total and comparisons for i.
  */
}

// Big O of 1 => O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
  /*
    Operations
    multiplication, addition, division
    regardless of the size of n, onl 3 operations are performed
  */
}

// console.log(addUpTo(6));

// Since it is nested looping, the O(n^2) => that is n squared
// function printAllPairs(n) {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// printAllPairs(2);

function double(arr) {
  return arr.map(item => item * 2);
}

console.log(double([1, 2, 3]));
