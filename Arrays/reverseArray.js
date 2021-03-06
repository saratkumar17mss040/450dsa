// Write a program to reverse an array or string - 
// https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

// Solution 1

const arr1 = [1, 2, 3];
const str1 = '1234';

function reverseArray1(arr1, str1) {
	console.log(arr1.reverse());
	// reversed string just to know built-ins in js
	console.log(str1.split('').reverse().join(''));
}

reverseArray1(arr1, str1);

// Solution 2

function reverseArray2(arr1, str1) {
	const arr2 = [];
	var str2 = '';

	// TIME COMPLEXITY - O(n)
	for (let i = arr1.length - 1; i >= 0; i--) {
		arr2.push(arr1[i]);
	}

	// TIME COMPLEXITY - O(n)
	for (let i = str1.length - 1; i >= 0; i--) {
		str2 += str1[i];
	}

	console.log(arr2);
	console.log(str2);
}

reverseArray2(arr1, str1);

// Solution 3 - ITERATIVE APPROACH FOR ARRAYS

function reverseArray3(arr1) {
	var temp;
	var low = 0;
	var high = arr1.length - 1;

	// TIME COMPLEXITY - O(n)
	while (low < high) {
		temp = arr1[low];
		arr1[low] = arr1[high];
		arr1[high] = temp;
		low++;
		high--;
	}

	console.log(arr1);
}

reverseArray3(arr1);

// Solution 4 - RECURSIVE APPROACH FOR ARRAYS

function reverseArray4(arr1, low, high) {
	var temp;

	if (low >= high) {
		console.log(arr1);
		return;
	}

	// TIME COMPLEXITY - O(n)
	temp = arr1[low];
	arr1[low] = arr1[high];
	arr1[high] = temp;
	reverseArray4(arr1, low + 1, high - 1);
}

reverseArray4(arr1, 0, arr1.length - 1);
