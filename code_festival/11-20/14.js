function solution(n) {
	return n % 3 === 1 ? "짝" : n;
}

function getRandom() {
	return Math.ceil(Math.random() * 100);
}

console.log(solution(getRandom()));
console.log(solution(getRandom()));
console.log(solution(getRandom()));
