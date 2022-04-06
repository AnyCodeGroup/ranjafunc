function solution(max) {
	const nums = Array(max)
		.fill()
		.map((v, i) => `${i + 1}`);

	return nums.reduce((acc, cur) => {
		let add = 0;
		`${cur}`.split("").forEach((item, i) => (add += parseInt(item, 10)));
		return add + acc;
	}, 0);
}
console.log(solution(20));
