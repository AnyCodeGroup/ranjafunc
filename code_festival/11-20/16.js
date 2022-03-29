function solution(str) {
	let backwarded = "";

	for (let i = str.length - 1; i >= 0; i--) {
		backwarded += str[i];
	}
	return backwarded;
}

console.log(solution("명현만미이잉"));
