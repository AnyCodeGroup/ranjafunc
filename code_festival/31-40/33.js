function solution(nums) {
	return nums
		.split(" ")
		.sort((a, b) => a - b)
		.join(" ");
}

console.log(solution("1 32 3 22"));
