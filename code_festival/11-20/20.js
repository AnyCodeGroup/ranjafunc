function solution(a, b) {
	const quotient = parseInt(String(a / b));
	const rest = a % b;

	return `${quotient} ${rest}`;
}

console.log(solution(10, 2));
