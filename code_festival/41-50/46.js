function solution(max) {
	const nums = Array(max)
		.fill()
		.map((v, i) => `${i + 1}`);

	return nums.reduce((acc, cur) => {
		let add = 0;
		`${cur}`.split("").forEach((item, i) => (add += parseInt(item, 10)));
		return add + acc;
	}, 0);
}
console.log(solution(20));

/*
let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);
*/
