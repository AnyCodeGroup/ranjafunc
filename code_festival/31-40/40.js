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
