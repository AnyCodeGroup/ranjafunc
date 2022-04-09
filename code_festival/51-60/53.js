function solution(str) {
	let isMatch = true;
	const brackets = {
		0: ["(", ")"],
		1: ["[", "]"],
		2: ["{", "}"],
	};

	const count = [0, 0, 0];
	const container = [];

	for (let i = 0; i < str.length; i++) {
		for (let key of Object.entries(brackets)) {
			if (str[i] === key[1][0]) {
				// '(', '{' , '['
				count[key[0]] += 1;
				container.push(str[i]);
			}

			if (str[i] === key[1][1]) {
				// ')', '}' , ']'
				if (container.length === 0) {
					isMatch = false;
					break;
				}

				if (container[container.length - 1] === key[1][0]) {
					container.pop();
				} else {
					isMatch = false;
					break;
				}

				count[key[0]] -= 1;
			}
		}
	}

	// 각 괄호 갯수가 짝수가 아니거나           순서가 맞지 않거나
	if (count.some((n) => n !== 0) || container.length > 0) {
		isMatch = false;
	}

	return isMatch ? "YES" : "NO";
}

console.log(solution("()()"));
console.log(solution("({})()"));
console.log(solution("({)()"));

/*
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

*/
