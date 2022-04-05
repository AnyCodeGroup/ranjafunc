function solution(nums) {
	const compare = nums
		.split(" ")
		.sort((a, b) => a - b)
		.join(" ");
	return nums === compare ? "YES" : "NO";
}

console.log(solution("31 2 3 22"));
