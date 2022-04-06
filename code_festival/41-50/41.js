function solution(num) {
	if (num / 2 === 1 || num % 2 === 1) {
		return "YES";
	}
	return "NO";
}

console.log(solution(3));
