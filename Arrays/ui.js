// Find the Union and Intersection of the two sorted arrays.
// https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0

// Solution - 1 using set object in js

function unionAndIntersection1(arr1, arr2) {
	let set1 = new Set(arr1);
	let set2 = new Set(arr2);
	let intersectSet = new Set();

	for (const ele of set2) {
		if (set1.has(ele)) intersectSet.add(ele);
	}

	for (const ele of set2) {
		set1.add(ele);
	}

	console.log('Union and intersection of arrays are:');
	console.log([...set1]);
	console.log([...intersectSet]);
}

console.log(
	unionAndIntersection1([1, 2, 3, 4, 5, 6], [7, 8, 9, 2, 1, 4, 5, 6, 11])
);

console.log(
	unionAndIntersection1([1, 2, 3, 4, 5, 6], [1, 2, 4, 5, 6, 7, 8, 9, 10])
);

// Solution -2 using filter in js

function union2(arr1, arr2) {
	var newArray = [...arr1, ...arr2];
	return newArray.filter((ele, index, arr) => index === arr.indexOf(ele))
		.length;
}

console.log(union2([1, 2, 3, 4, 5, 5, 6, 7], [6, 7, 8, 9, 10, 2, 1, 2, 3, 3]));

// Solution -3 using includes in js

function union3(arr1, arr2) {
	var newArray = [...arr1, ...arr2];
	var newArray2 = [];
	for (let i = 1; i < newArray.length; i++) {
		if (!newArray2.includes(newArray[i])) newArray2.push(newArray[i]);
	}
	console.log(newArray2);
	return newArray2.length;
}

console.log(union3([1, 2, 3, 4, 5, 5, 6, 7], [6, 7, 8, 9, 10, 2, 1, 2, 3, 3]));
