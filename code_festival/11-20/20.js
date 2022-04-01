function solution(a, b) {
	const quotient = parseInt(String(a / b), 10);
	const rest = a % b;

	return `${quotient} ${rest}`;
}

console.log(solution(10, 2));

/*
parseInt(string: string, radix?: number): number
문자열을 특정 진수의 정수로 반환해준다.
-parseInt는 정수 값을 반환하기 위해 소수점 이하 값을 잘라냅니다. 
- radix의 기본값이 10이 아니므로 명시해줘야한다.!!

console.log(parseInt('0x30')); // 1. return 48
console.log(parseInt('030')); // 2. return (ECMAScript5 이상)30
console.log(parseInt('30')); // 3. return 30
radix는 string의 prefix에 따라 결정
string이 0x로 시작할 경우에는 16진수, 
0일 때는 8진수나 10진수, 
이 외에는 10진수로 변환을 시도
 */
