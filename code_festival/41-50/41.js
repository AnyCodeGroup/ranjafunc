function solution(num) {
	for (let i = 2; i < num; i++) {
		const result = num % i;
		if (result === 0) {
			console.log("NO");
			return false;
		}
	}
	if (num === 1) {
		console.log("NO");
		return;
	}
	console.log("YES");
}

console.log(solution(27));

/*

소수에 규칙이 없어서 단순 반복문이 맞다.. 

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}
console.log(solution(3));
*/
