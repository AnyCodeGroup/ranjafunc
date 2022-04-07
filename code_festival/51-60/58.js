function solution(num) {
	const string = `${num}`.split("").reverse().join("");
	const result = [];
	let count = 0;

	for (let i = 0; i < string.length; i++) {
		if (count !== 0 && count % 3 === 0) {
			result.unshift(",");
		}
		count++;

		result.unshift(string[i]);
	}
	return result.join("");
}

console.log(solution(123456789));
