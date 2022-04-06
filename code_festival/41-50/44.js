function solution(num) {
	const nums = `${num}`
		.split("")
		.map((str) => parseInt(str, 10))
		.reduce((acc, cur) => acc + cur, 0);
	return nums;
}

console.log(solution(1832));
