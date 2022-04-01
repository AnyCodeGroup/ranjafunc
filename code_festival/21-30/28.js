function solution(word) {
	const words = word.split("");
	let str = "";

	for (let i = 0; i < words.length - 1; i++) {
		str += `${words[i]} ${words[i + 1]}\n`;
	}

	return str;
}

console.log(solution("javascript"));
