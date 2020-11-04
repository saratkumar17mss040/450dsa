// Write a program to cyclically rotate an array by one.
// https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0

// Solution 1 - TIME COPLEXITY - O(n)
function rotate1(arr) {
	var last = arr[arr.length - 1];
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = last;
	return arr;
}

// Solution 2
function rotate2(arr) {
	arr.unshift(arr.pop());
	return arr;
}

var arr = [1, 2, 3, 4, 5];

console.log(rotate1(arr));
console.log(rotate2(arr));
