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

/*
let a = prompt('10진수를 입력해주세요.')
let b = [];
let result = '';

while (a){
	b.push(a % 2);
	a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
})

console.log(result);
*/
