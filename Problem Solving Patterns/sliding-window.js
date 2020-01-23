/* --------------- SLIDING WINDOW -------------------
  This pattern involves creating a window which can either be an array of number from one position to another. Depending on a certain condotion. the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.
*/
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ----------- NAIVE SOLUTION, not using sliding window (Time Complexity - O(n^2))
// function maxSubarraySum(arr, num) {
// 	if (num > arr.length) {
// 		return null;
// 	}
// 	let max = -Infinity; // Makes sure that if the numbers are negative, max would still be the smallest
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		// arr.length - num + 1 ensures that the last point we can stop is num positions away from the end of the array.
// 		let temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > max) {
// 			max = temp;
// 		}
// 	}
// 	return max;
// }

// REFACTORED SOLUTION using Sliding Window (Time Complexity - O(n))
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

// Tests
console.log(maxSubarraySum([1, 2, 3, 5, 2, 8, 1, 5], 2)); // => 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // => 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // => 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // => 13
console.log(maxSubarraySum([], 4)); // => null
