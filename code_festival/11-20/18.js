// function solution(a, b, c) {
// 	var sum = String((a + b + c) / 3);
// 	var index = sum.indexOf(".");

// 	sum = sum.substring(0, index);
// 	return +sum;
// }
function solution(a, b, c) {
	var sum = parseInt(String((a + b + c) / 3));
	return sum;
}

console.log(solution(11, 22, 23));
