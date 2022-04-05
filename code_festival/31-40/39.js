function solution(str) {
	const result = str.split("").map((char) => {
		return char === "q" ? "e" : char;
	});
	return result.join("");
}

console.log(solution("querty"));
console.log(solution("hqllo my namq is hyqwon"));
