function solution(str) {
	const data = str.split("");
	let result = "";

	for (let i = 0; i < data.length; i++) {
		if (data[i] === data[i].toUpperCase()) {
			result += data[i].toLowerCase();
		} else {
			result += data[i].toUpperCase();
		}
	}

	return result;
}

console.log(solution("AAABBBcccddd"));
