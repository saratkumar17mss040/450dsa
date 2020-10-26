// Find the maximum and minimum element in an array

// Solution - 1

var arr = [14, 23, 13, 56, 233, 422, 3, -5];

function minAndMax1(arr) {
	// using Math built-in object
	return [Math.min(...arr), Math.max(...arr)];
}

console.log(minAndMax1(arr));

// Solution  - 2 - LINEAR SEARCH - TIME COMPLEXITY - O(n)

function minAndMax2(arr) {
	var min = arr[0];
	var max = arr[1];
	for (let i = 2; i < arr.length; i++) {
		if (max < arr[i]) max = arr[i];
		if (min > arr[i]) min = arr[i];
	}
	return [min, max];
}

console.log(minAndMax2(arr));
