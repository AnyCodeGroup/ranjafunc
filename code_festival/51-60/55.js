const route = [];

function hanoi(num, start, end, temp) {
	if (num === 1) {
		console.log(`${start} 기둥에서 ${num} ${end}기둥으로 옮깁니다.`);
		route.push([start, end]);
		return NaN;
	}

	//원반이 n-1개를 경유기둥으로 옮기고
	hanoi(num - 1, start, temp, end);
	//가장 큰 원반은 목표기둥으로
	route.push([start, end]);
	console.log(`${start} 기둥에서 ${num} ${end}기둥으로 옮깁니다.`);
	//경유기둥과 시작기둥을 바꿉니다.
	hanoi(num - 1, temp, end, start);
}

hanoi(2, "A", "C", "B");
console.log(route);
console.log(route.length);

/*
A 기둥에서 1 C기둥으로 옮깁니다.
A 기둥에서 2 B기둥으로 옮깁니다.
C 기둥에서 1 B기둥으로 옮깁니다.

A 기둥에서 3 C기둥으로 옮깁니다.
B 기둥에서 1 A기둥으로 옮깁니다.
B 기둥에서 2 C기둥으로 옮깁니다.
A 기둥에서 1 C기둥으로 옮깁니다.
A 기둥에서 4 B기둥으로 옮깁니다.
C 기둥에서 1 B기둥으로 옮깁니다.
C 기둥에서 2 A기둥으로 옮깁니다.
B 기둥에서 1 A기둥으로 옮깁니다.
C 기둥에서 3 B기둥으로 옮깁니다.
A 기둥에서 1 C기둥으로 옮깁니다.
A 기둥에서 2 B기둥으로 옮깁니다.
C 기둥에서 1 B기둥으로 옮깁니다.
A 기둥에서 5 C기둥으로 옮깁니다.
B 기둥에서 1 A기둥으로 옮깁니다.
B 기둥에서 2 C기둥으로 옮깁니다.
A 기둥에서 1 C기둥으로 옮깁니다.
B 기둥에서 3 A기둥으로 옮깁니다.
C 기둥에서 1 B기둥으로 옮깁니다.
C 기둥에서 2 A기둥으로 옮깁니다.
B 기둥에서 1 A기둥으로 옮깁니다.
B 기둥에서 4 C기둥으로 옮깁니다.
A 기둥에서 1 C기둥으로 옮깁니다.
A 기둥에서 2 B기둥으로 옮깁니다.
C 기둥에서 1 B기둥으로 옮깁니다.
A 기둥에서 3 C기둥으로 옮깁니다.
B 기둥에서 1 A기둥으로 옮깁니다.
B 기둥에서 2 C기둥으로 옮깁니다.
A 기둥에서 1 C기둥으로 옮깁니다.
\https://www.youtube.com/watch?v=uSSC0aKXbWQ
*/
