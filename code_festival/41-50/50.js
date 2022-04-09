function bubble(arr) {
	let result = arr.slice();

	for (let i = 0; i < result.length - 1; i++) {
		for (let j = 0; j < result.length - i; j++) {
			// 왜 점점 수행할 횟수가 적어져도 되는지 이해가 안됏다..
			// 버블 정렬을 돌리면 무조건 첫 회전에 제일 큰숫자가 맨뒤에 있을 수 밖에없다.
			// 그러면 그다음 큰숫자가 다음회전에 그 앞으로 오고 점점 반복횟수가 줄어들수밖에없다.
			console.log(i, j);
			if (result[j] > result[j + 1]) {
				const temp = result[j];
				result[j] = result[j + 1];
				result[j + 1] = temp;

				// const less = result[j + 1];
				// result[j + 1] = result[j];
				// result[j] = less;
			}
			console.log("=>", result);
		}
	}
	return result;
}

// const items = prompt("입력해주세요.")
// 	.split(" ")
// 	.map((n) => {
// 		return parseInt(n, 10);
// 	});

const arr = [4, 22, 5, 8, 2, 11, 1];

console.log(bubble(arr));

// 버블 정렬 공부하기
