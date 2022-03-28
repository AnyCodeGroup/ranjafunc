const star = 10;

function solution(star) {
	var tree = "";
	for (var i = 0; i < star; i++) {
		for (var j = 0; j < star - i; j++) {
			tree += " ";
		}
		tree += "*".repeat(i * 2 + 1) + "\n";
	}

	return tree;
}

console.log(solution(star));

/*
풀은 방식:
공백은 인풋의 개수 - 반복수  
별의 개수는 1 3 5 7 9 패턴으로 
반복수를 2에 곱하고 + 1하기


답:

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

*/
