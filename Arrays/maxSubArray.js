function sum(currentSubArray) {
	return currentSubArray.reduce((ele, acc) => ele + acc, 0);
}

// O(n + n^2 + n^2)
// O(n + 2n^2)
// O(n^2)

function maxSubArray(arr) {
	var max_sum = arr[0];

	// O(n)
	for (let i = 1; i < arr.length - 1; i++) {
		if (max_sum < arr[i]) max_sum = arr[i];
	}

	var len = arr.length;

	// O(n^2)
	for (let i = 0; i < len; i++) {
		let current_sum = sum(arr.slice(i, len));
		if (len === 1) break;
		if (max_sum < current_sum) {
			max_sum = current_sum;
		}
		len--;
	}

	// O(n^2)
	for (let i = 1; i < len - 1; i++) {
		// O(n)
		let current_sum = sum(arr.slice(i)); // O(n)
		if (max_sum < current_sum) {
			// O(1)
			max_sum = current_sum;
		}
	}
	console.log(max_sum);
	return max_sum;
}

console.log(maxSubArray([1, 2, 3, -2, 5]));
console.log(maxSubArray([-1, -2, -3, -4]));
console.log(maxSubArray([-1, -2, 3, 4, -1]));