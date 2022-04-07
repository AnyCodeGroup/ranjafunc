function solution(str) {
	const arr = {
		1: ["{", "}"],
		2: ["[", "]"],
		3: ["(", ")"],
	};

	let isMatch = true;

	for (let i = 0; i < str.length; i++) {
		let type;
		for (const key of Object.entries(arr)) {
			if (key[1].includes(str[i])) {
				type = key[0];
				break;
			}
		}

		if (
			str[str.length - i - 1] !== arr[type].filter((char) => char !== str[i])[0]
		) {
			isMatch = false;
			break;
		}
	}

	return isMatch ? "YES" : "NO";
}

console.log(solution("([{()}])"));
console.log(solution("[]"));
