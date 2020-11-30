// find Largest sum contiguous Subarray [V. IMP]
// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

// using kandane's algorithm

// Solution - TIME COMPLEXITY - O(n)

function maxSubArray(arr) {
	let maxSoFar = Number.MIN_VALUE,
		maxEnd = 0;
	for (let i = 0; i < arr.length; i++) {
		maxEnd = maxEnd + arr[i];
		if (maxSoFar < maxEnd) maxSoFar = maxEnd;
		else if (maxEnd < 0) maxEnd = 0;
	}
	return maxSoFar;
}

console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
