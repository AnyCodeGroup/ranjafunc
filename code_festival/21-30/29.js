function solution(char) {
	if (typeof char !== "string" || char.length > 1) {
		throw new Error("WRONG PARAMETER");
	}

	return char === char.toUpperCase() ? "YES" : "NO";
}

console.log(solution("A"));
