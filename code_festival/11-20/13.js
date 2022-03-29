function solution(n) {
	const planets = ["수성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
	if (typeof n !== "number" || n > planets.length) {
		throw new Error("error");
	}
	return planets[n - 1];
}
console.log(solution(1));
