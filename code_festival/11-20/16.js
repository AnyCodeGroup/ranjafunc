function solution(str) {
	let backwarded = "";

	for (let i = str.length - 1; i >= 0; i--) {
		backwarded += str[i];
	}
	return backwarded;
}

console.log(solution("명현만미이잉"));

/*
답:
const reverseString = n.split("").reverse().join();

 reverse 배열 순서 반전 메소드
 */
