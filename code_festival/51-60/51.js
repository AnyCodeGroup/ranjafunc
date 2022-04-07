function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}
	while (right.length) {
		result.push(right.shift());
	}
	return result;
}

const array = [2, 5, 4, 9, 23, 6, 8];
var a = [5, 2, 4, 7, 6, 1, 3, 8];
console.log(mergeSort(array));
