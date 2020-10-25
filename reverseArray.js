// Write a program to reverse an array or string

// Solution 1

const arr1 = [1, 2, 3];
const str1 = '1234';

function reverseArray1(arr1, str1) {
	console.log(arr1.reverse());
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

// Solution 3 - ITERATIVE APPROACH FOR ARRAYS AND STRINGS

// NOT WORKING FOR STRINGS !
function reverseArray3(arr1, str1) {
	var temp;
	var low = 0;
	var high = arr1.length - 1;
	var lowStr = 0;
	var strHigh = str1.length - 1;

	// TIME COMPLEXITY - O(n)
	while (low < high) {
		temp = arr1[low];
		arr1[low] = arr1[high];
		arr1[high] = temp;
		low++;
		high--;
	}

	temp = undefined;

	// TIME COMPLEXITY - O(n) - NOT WORKING !
	while (lowStr < strHigh) {
		temp = str1[lowStr];
		str1[lowStr] = str1[strHigh];
		str1[strHigh] = temp;
		lowStr++;
		strHigh--;
	}

	console.log(arr1);
	console.log(str1);
}

reverseArray3(arr1, str1);

// Solution 4 - RECURSIVE APPROACH FOR ARRAYS

function reverseArray4(arr1, low, high) {
	var temp;
	// var low = 0;
	// var high = arr1.length - 1;

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

reverseArray4(arr1,0,arr1.length - 1);

// RECURSIVE APPROACH FOR STRINGS - NOT WORKING !

function reverseStr(str1, low, high) {
	var temp;

	if (low >= high) {
		console.log(str1);
		return;
	}

	// TIME COMPLEXITY - O(n)
	temp = str1[low];
	str1[low] = str1[high];
	str1[high] = temp;
	reverseStr(str1, low + 1, high - 1);
}

reverseStr(str1, 0, str1.length - 1);
