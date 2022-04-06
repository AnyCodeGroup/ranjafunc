function bubble(arr) {
	let result = arr.slice();

	for (let i = 0; i < result.length - 1; i++) {
		for (let j = 0; j < result.length - 1; j++) {
			if (result[j] > result[j + 1]) {
				const less = result[j + 1];
				result[j + 1] = result[j];
				result[j] = less;
			}
		}
	}
	return result;
}

// const items = prompt("입력해주세요.")
// 	.split(" ")
// 	.map((n) => {
// 		return parseInt(n, 10);
// 	});

const arr = [4, 2, 3, 8, 5, 22, 1];

console.log(bubble(arr));

// 버블 정렬 공부하기
