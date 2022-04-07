const nationWidth = {
	korea: 220877,
	Rusia: 17098242,
	China: 9596961,
	France: 543965,
	Japan: 377915,
	England: 242900,
};

function findSimliar() {
	let min = null;
	let result = "";

	for (const key of Object.entries(nationWidth)) {
		if (key[0] === "korea") continue;

		const diff = Math.abs(nationWidth["korea"] - key[1]);
		console.log(diff);
		if (min === null) {
			min = diff;
			result = key[0];
		} else if (min > diff) {
			min = diff;
			result = key[0];
		}
	}
	return `${result} ${min}`;
}

console.log(findSimliar());
