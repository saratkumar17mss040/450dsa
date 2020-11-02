// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo
// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0

// Solution - TIME COMPLEXITY - O(n)

const sort = (arr) => {
	var newArray = [];
	for (let i = 0; i <= 2; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === i) {
				newArray.push(arr[j]);
			}
		}
	}
	return newArray;
};

console.log(sort([0, 1, 2, 0, 1, 2, 0]));
