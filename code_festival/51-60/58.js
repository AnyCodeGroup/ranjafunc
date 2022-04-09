function solution(num) {
	const string = `${num}`.split("").reverse().join("");
	const result = [];
	let count = 0;

	for (let i = 0; i < string.length; i++) {
		if (count !== 0 && count % 3 === 0) {
			result.unshift(",");
		}
		count++;

		result.unshift(string[i]);
	}
	return result.join("");
}

function comma(s) {
	console.log(s);
	if (s.length <= 3) {
		return s;
	} else {
		console.log(`=> ${s.slice(0, s.length - 3)} + ${s.slice(s.length - 3)}`);
		return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
	}
}

console.log(comma("1234567890"));

/*
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

const n = prompt('숫자를 입력해주세요.');
console.log(comma(n));
*/
