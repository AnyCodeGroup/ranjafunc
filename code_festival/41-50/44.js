function solution(num) {
	const nums = `${num}`
		.split("")
		.map((str) => parseInt(str, 10))
		.reduce((acc, cur) => acc + cur, 0);
	return nums;
}

console.log(solution(1832));

/*
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}

console.log(sum);
*/
