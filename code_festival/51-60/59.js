function solution(word) {
	const max = 50;
	const left = parseInt((max - word.length) / 2, 10);
	const right = max - left - word.length;
	let result = "";

	for (let i = 0; i < left; i++) {
		result += "=";
	}
	result += word;
	for (let i = 0; i < right; i++) {
		result += "=";
	}

	return result;
}

console.log(solution("에레레레"));
