function solution(str) {
	const result = str.split("").map((char) => {
		return char === "q" ? "e" : char;
	});
	return result.join("");
}

console.log(solution("querty"));
console.log(solution("hqllo my namq is hyqwon"));

/*
function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));
*/

function solution2(str, searchStr, replaceStr) {
	return str
		.split("")
		.map((char) => {
			return char === searchStr ? replaceStr : char;
		})
		.join("");
}
