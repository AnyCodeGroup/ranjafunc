var star = 5;

function solution(star) {
	var stars = "";
	for (var i = star - 1; i >= 0; i--) {
		for (var k = 0; k < i; k++) {
			stars += " ";
		}

		for (var j = 0; j < 9 - i * 2; j++) {
			stars += "*";
		}
		stars += "\n";
	}

	return stars;
}

console.log(solution(star));
