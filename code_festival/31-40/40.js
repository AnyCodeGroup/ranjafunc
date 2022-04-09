function solution(limit, n, ...weights) {
	let totalWeight = 0;
	let result;
	const members = weights.sort((a, b) => a - b);

	for (let i = 0; i < n; i++) {
		totalWeight += members[i];

		if (totalWeight === limit) {
			result = i + 1;
			break;
		} else if (totalWeight > limit) {
			result = i;
			break;
		}
	}

	return result ?? n;
}

console.log(solution(100, 5, 20, 10, 20, 10, 20));

/*
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 경우의수가 따로없는데 누구든 순서없이 들어갈 수 있다고 생각함..

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

*/
