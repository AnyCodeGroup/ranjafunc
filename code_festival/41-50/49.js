function solution(nums) {
	const data = nums
		.split(" ")
		.map((char) => parseInt(char))
		.sort((a, b) => b - a);

	return data[0];
}

console.log(solution(`10 9 8 7 6 5 4 3 2 1`));
