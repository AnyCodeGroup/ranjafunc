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

/*
답
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum/3));
*/
