function solution(n) {
	let result = "";
	for (let i = 1; i < 10; i++) {
		result += `${i * n} `;
	}
	return result;
}

console.log(solution(2));
