function solution(name, score) {
	const names = name.split(" ");
	const scores = score.split(" ");
	const obj = {};

	for (let i = 0; i < names.length; i++) {
		obj[names[i]] = parseInt(scores[i], 10);
	}

	return obj;
}

console.log(solution("명현만 김진차", "29 30"));
