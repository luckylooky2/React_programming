// 3. 예제 작성(JS)

const Header = () => {
	return React.createElement(
		'h2',
		null,
		"안녕하세요. 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요."
	);
}

// LikeButton 컴포넌트 : 클래스
function LikeButton() {
	const [liked, setLiked] = React.useState(false);
	const text = liked ? '좋아요 취소' : '좋아요';
	return React.createElement(
		'button',
		{ onClick: () => setLiked(!liked)},
		text);
}

const likeControlModule = () => {
	const [counter, setCounter] = React.useState(0);
	// 여러 개를 자식을 병렬적으로 위치시키려면 div가 필요함
	// 바로 createElement를 하는 것이 아님
	return React.createElement(
		'div',
		null,
		React.createElement(currentStatus),
		React.createElement(currentLike, {counter : counter}),
		React.createElement(controlButton, {title : '증가', onClick : () => {setCounter(counter + 1)}}),
		React.createElement(controlButton, {title : '감소', onClick : () => {setCounter(counter - 1)}})
	);
}

const currentStatus = () => {
	return React.createElement(
		'span',
		null,
		'현재 카운트 : '
	);
}

// props 방법 1
const currentLike = (props) => {
	return React.createElement(
		'span',
		null,
		props.counter
	);
}

// props 방법 2
const controlButton = ({title, onClick}) => {
	return React.createElement(
		'button',
		{onClick: onClick},
		title
	);
}


const Div = () => {
	return React.createElement(
		'div',
		null, 
		React.createElement(Header),
		React.createElement(LikeButton),
		React.createElement(likeControlModule)
	)
}

const domContainer1 = document.querySelector('#react-root1');
const component1 = React.createElement(Div);

console.log(React);
ReactDOM.render(component1, domContainer1);

// 새로 나온 리액트 18에서는 ReactDOM.render가 아니라, createRoot를 사용해야 함
// const root = ReactDOM.createRoot(document.querySelector('#react-root1'));
// root.render(component1);