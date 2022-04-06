const people = {
	이호준: "01050442903",
	이호상: "01051442904",
	이준호: "01050342904",
	이호준: "01050442903",
	이준: "01050412904",
	이호: "01050443904",
	이호준: "01050442903",
};

function solution(obj) {
	const newArr = [];
	for (const key of Object.entries(obj)) {
		newArr.push({ [key[0]]: key[1] });
	}

	const data = new Set(newArr);
	return data.size;
}

console.log(solution(people));
