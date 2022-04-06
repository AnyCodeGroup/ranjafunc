function solution(month, day) {
	const year = 2020;
	const date = new Date(`${year}-${month}-${day}`);
	const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	const result = weeks[date.getDay()];
	return result;
}

console.log(solution(1, 1));
