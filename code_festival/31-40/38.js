function solution(nums) {
	const inputs = nums
		.split(" ")
		.map((str) => parseInt(str, 10))
		.sort((a, b) => b - a);
	let max = inputs[0];
	let count = 0;
	let rank = 1;

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i] === max) {
			count += 1;
		} else if (inputs[i] < max) {
			rank += 1;
			if (rank === 4) break;
			count += 1;
			max = inputs[i];
		}
	}

	return count;
}

console.log(solution("97 86 75 66 55 97 85 97 97 95"));

/* 
const scores = prompt('점수입력').split(' ').map(function(n){
  return parseInt(n, 10);
});

scores.sort((a, b) => {
  return a-b;
});

let count = 0;
let arr = [];

간단히 생각할 걸 그랫다

전체 1번 반복문돌리면 해결되는거엿다..

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)){
    arr.push(n);
  }
  count += 1;
}

console.log(count);
*/
