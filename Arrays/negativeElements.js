// Move all the negative elements to one side of the array
// https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

// Solution - TIME COMPLEXITY - O(n)

const sortNum = (arr) => {
	var high = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		while (arr[i] < 0) {
			i++;
		}
		while (arr[high] >= 0) {
			high--;
		}
		if (i < high) {
			let temp = arr[i];
			arr[i] = arr[high];
			arr[high] = temp;
		}
	}
	return arr;
};

console.log(sortNum([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
