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
