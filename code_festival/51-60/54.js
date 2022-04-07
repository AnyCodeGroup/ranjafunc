function solution(nums) {
	const data = nums.split(" ").map((v) => parseInt(v, 10));
	let result = true;
	for (let i = 0; i < data.length; i++) {
		if (i !== data.length - 1 && data[i] + 1 !== data[i + 1]) {
			result = false;
			break;
		}
	}

	return result ? "YES" : "NO";
}

console.log(solution("1 2 3 4 5"));
console.log(solution("1 4 2 8 5"));
