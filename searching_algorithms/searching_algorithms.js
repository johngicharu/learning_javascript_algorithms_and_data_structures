/* --------- SEARCHING ALGORITHMS -----------------
  Pros and cons of linear search or binary search. How to implement naive string searching and KMP string searching algorithms.
*/
// The simplest way to search arrays is to go through the array checking each item and comparing it with the search value.
const statesArray = [
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District of Columbia",
	"Federated States of Micronesia",
	"Florida",
	"Georgia",
	"Guam",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Marshall Islands",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Northern Mariana Islands",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Palau",
	"Pennsylvania",
	"Puerto Rico",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virgin Island",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
];

// This simple way visiting one item at a time from begining of end checking every single item. This is called linear search.
// The bigO is O(n)
// function linearSearch(arr, val) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === val) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// console.log(linearSearch(statesArray, "Wyoming"));

// BINARY SEARCH
// Can be much faster than linear search. It allows us to eliminate half of the remaining elements at a time. However, the elements have to be SORTED!
// This uses divide and conquer
// This has a time complexity of O(log n) => this is the worst case. The best case is obviously O(1) if we pick the middle element as what we are actually looking for.
// function binarySearch(sortedArr, val) {
// 	let start = 0;
// 	let end = sortedArr.length - 1;
// 	let middle = Math.floor((start + end) / 2);

// 	while (sortedArr[middle] !== val && start <= end) {
// 		if (val < sortedArr[middle]) {
// 			end = middle - 1;
// 		} else {
// 			start = middle + 1;
// 		}
// 		middle = Math.floor((start + end) / 2);
// 	}
// 	return sortedArr[middle] === val ? middle : -1;
// }

// // console.log(statesArray[40]);
// console.log(binarySearch([1, 2, 3, 4, 7, 9, 10, 21, 34], 9));
