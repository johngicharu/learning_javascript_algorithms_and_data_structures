// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same.
// same([1,2,3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false (must be the same frequency)
// function same(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	for (let i = 0; i < arr1.length; i++) {
// 		const correctIndex = arr2.indexOf(arr1[i] ** 2);
// 		if (correctIndex === -1) {
// 			return false;
// 		}
// 		console.log(arr2);
// 		arr2.splice(correctIndex, 1); // Once found, remove it
// 	}
// 	return true;
// }

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// REFACTORED
// 2 loops are far better than a loop nested inside another. O(n) opposed to O(n2)
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	const frequencyCounter1 = {};
	const frequencyCounter2 = {};
	for (let item of arr1) {
		frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
	}
	for (let item of arr2) {
		frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		// Check if each of the keys squared exist in the second frequency counter
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		// Check whether there is a similar number of items for each of the keys. eg. for 2 2's, we need 2 4's in the second object.
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// ANAGRAMS
// Given two strings, write a function to determine if the second str4ing is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Using frequency counters ensures that we maintain a BigO of n
// function validAnagram(str1, str2) {
// 	// Check if the strings are of equal length => if not return false
// 	if (str1.length !== str2.length) {
// 		return false;
// 	}
// 	// Initialize frequencyCounters
// 	const frequencyCounter1 = {};
// 	const frequencyCounter2 = {};
// 	// Loop through strings to populate frequency counters
// 	// String 1
// 	for (let item of str1) {
// 		frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
// 	}
// 	for (let item of str2) {
// 		frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
// 	}
// 	// String 2
// 	// Compare the two frequency counters
// 	for (let key in frequencyCounter1) {
// 		if (
// 			!(key in frequencyCounter2) ||
// 			frequencyCounter1[key] !== frequencyCounter2[key]
// 		) {
// 			return false;
// 		}
// 		// if (frequencyCounter1[key] !== frequencyCounter2[key]) {
// 		// 	return false;
// 		// }
// 	}
// 	// return true at the end, if all checks pass
// 	return true;
// }

// Another solution
function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
}

// Tests
console.log(validAnagram("", "")); // => true
console.log(validAnagram("aaz", "zza")); // => false
console.log(validAnagram("anagram", "nagaram")); // => true
console.log(validAnagram("rat", "car")); // => false
console.log(validAnagram("awesome", "awesom")); // => false
console.log(validAnagram("texttwisttime", "timetwisttext")); // => true
console.log(validAnagram("qwerty", "qeywrt")); // => true
