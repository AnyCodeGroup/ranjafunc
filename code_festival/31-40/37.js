function solution(votes) {
	const result = votes.split(" ");
	const candi = [];
	const candiNums = [];

	for (let i = 0; i < result.length; i++) {
		if (candi.includes(result[i])) {
			const index = candi.indexOf(result[i]);
			if (candiNums[index]) {
				candiNums[index] += 1;
			}
		} else {
			candi.push(result[i]);
			candiNums.push(1);
		}
	}

	const winVoteCount = [...candiNums].sort((a, b) => a - b)[
		[...candiNums].length - 1
	];
	const winner = candi[candiNums.indexOf(winVoteCount)];
	return `${winner}님이 총 ${winVoteCount}표로 반장이 되었습니다.`;
}

console.log(solution("원범 원범 혜선 혜선 혜선 혜선 김진 김진"));

/**
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});
 */
