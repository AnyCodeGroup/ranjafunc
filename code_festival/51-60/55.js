// 하노이탑 원리는 이해되는데 코드가 이해안됨;; 그게그거일수도

const route = [];

function hanoi(num, start, end, temp) {
	if (num === 1) {
		route.push([start, end]);
		return NaN;
	}

	//원반이 n-1개를 경유기둥으로 옮기고
	hanoi(num - 1, start, temp, end);
	//가장 큰 원반은 목표기둥으로
	route.push([start, end]);
	//경유기둥과 시작기둥을 바꿉니다.
	hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);
