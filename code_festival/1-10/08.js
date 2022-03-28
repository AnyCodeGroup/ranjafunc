var d = {
	height: 180,
	weight: 78,
	weight: 84,
	temperature: 36,
	eyesight: 1,
};

console.log(d["weight"]); // 84

/*
	객체는 같은 키가 중복되면 앞의 값을 뒤의 값이 덮어쓴다.

	Object.freeze({id: 1}, {id: 2}) => 이것 또한 마찬가지
	React의 useState도 똑같은 원리로 작동한다.
	const [state, setState] = ({id: 2})

	const event = () => {
		setState({ id: 2 })
		setState({ id: 5 })
		setState({ id: 7 })
		setState({ id: 9 })
	}

	React는 스테이트함수가 호출될 때마다 리렌더링하지 않고 큐가 끝날때까지 호출된 setState함수를 한번에 처리한다
	setState(Object.freeze({id: 2}, {id: 5}, {id: 7}, {id: 9}))
	state = {id: 9 }
*/
