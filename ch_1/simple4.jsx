// 4. 예제 작성(JSX) 후 babel compiler 변환

// npx babel --watch ch_1/simple4.jsx --out-dir ch_1 --presets @babel/preset-react

const Header = () => {
	return (
	<h2>안녕하세요. 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요.</h2>
	);
}

// LikeButton 컴포넌트 : 클래스
function LikeButton() {
	const [liked, setLiked] = React.useState(false);
	const text = liked ? '좋아요 취소' : '좋아요';
	return (
		<button onClick={() => setLiked(!liked)}>{text}</button>
	);
}

const LikeControlModule = () => {
	const [counter, setCounter] = React.useState(0);
	// 여러 개를 자식을 병렬적으로 위치시키려면 div가 필요함
	// 바로 createElement를 하는 것이 아님
	return (
		<div>
			<CurrentStatus />
			<CurrentLike counter={counter} />
			<ControlButton title={'증가'} onClick={() => {setCounter(counter + 1)}} />
			<ControlButton title={'감소'} onClick={() => {setCounter(counter - 1)}} />
		</div>
	);
}

const CurrentStatus = () => {
	return (
		<span>현재 카운트 : </span>
	);
}

// props 방법 1
const CurrentLike = (props) => {
	return (
		<span>{props.counter}</span>
	);
}

// props 방법 2
const ControlButton = ({title, onClick}) => {
	return (
		<button onClick={onClick}>{title}</button>
	);
}


const Div = () => {
	return (
		<div>
			<Header />
			<LikeButton />
				<LikeControlModule />
		</div>
	);
}

const domContainer1 = document.querySelector('#react-root1');
const component1 = <Div />;

ReactDOM.render(component1, domContainer1);

// 새로 나온 리액트 18에서는 ReactDOM.render가 아니라, createRoot를 사용해야 함
// const root = ReactDOM.createRoot(document.querySelector('#react-root1'));
// root.render(component1);