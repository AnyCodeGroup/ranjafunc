function solution(n) {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		const count = `${i}`.split("").filter((v) => v === "1").length;
		result += count;
	}
	return result;
}

console.log(solution(1000));
console.log(solution(11));
