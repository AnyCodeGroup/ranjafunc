function solution(n) {
	let binary = "";

	for (let i = n; i >= 1; i /= 2) {
		i = parseInt(i, 10);
		console.log(i, i % 2);
		binary = `${i % 2}${binary}`;
	}

	return binary;
}

console.log(solution(13));

// https://eunhee-programming.tistory.com/54
// 10진수 <=> 2진수 변환 공부해오기
