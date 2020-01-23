/* --------------- DIVIDE AND CONQUER
  This pattern involves dividing a dataset into smaller chunks and then repeating the process with a subset of data. This pattern can tremendousely decrease time complexity.
*/
// Given a sorted array of integers, write a function called search, that accepts the value and returns the index where the value passed to the function is located. If the value is not found, return -1;

// ---------- NAIVE SOLUTION ------------- time complexity (O(n))
// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) return i
//   }
//   return -1;
// }

// DIVIDE AND CONQUER => BigO => O(log n)
function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;
	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		// let currentElement = arr[middle];

		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // => 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // => 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // => -1
