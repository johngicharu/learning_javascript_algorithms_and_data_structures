// Recursion is a process (a function in this case) that calls itself.

/* --------- The Callstack ----------
  In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked. This is called the call stack.
  A stack is actually a data structure. Anytime a function is invoked, it is placed on the top of the call stack.
  When js sees a return keyword, or when the function endsm the compiler will remove (pop) it out of the stack.
  In recursive functions, the same recursive function keeps being pushed onto the call stack. Unlike common behavior which is the functions being pushed and popped out of the call stack
*/

// Recursive functions have a base case when the recursion stops. Similar to while loops, this is when the condition returns false or true depending on your logic.
// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }

//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(5);
// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// Factorial - the most classic example of recursion
// function factorial(num) {
//   if (num === 2) return num; // no need to multiply by 1 (if num 3 ? factorial => 3 * 2 * 1)
//   return num * factorial(num - 1);
// }

// console.log(factorial(3))

// Helper method recursion.
// These allow us to keep some values constant while the recursive function resolves and modifies this function, all the while without polluting the global scope.
function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5]));
