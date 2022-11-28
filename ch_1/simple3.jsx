// 3. 예제 작성

// LikeButton 컴포넌트 : 클래스
function LikeButton() {
	const [liked, setLiked] = React.useState(false);
	const text = liked ? '좋아요 취소' : '좋아요';
	return React.createElement(
		'button',
		{ onClick: () => setLiked(!liked)},
		text);
}

const domContainer1 = document.querySelector('#react-root1');
const domContainer2 = document.querySelector('#react-root2');
const domContainer3 = document.querySelector('#react-root3');
const component1 = React.createElement(LikeButton);

ReactDOM.render(component1, domContainer1);
ReactDOM.render(component1, domContainer2);
ReactDOM.render(component1, domContainer3);
// 새로 나온 리액트 18에서는 ReactDOM.render가 아니라, createRoot를 사용해야 함
// const root = ReactDOM.createRoot(document.querySelector('#react-root1'));
// root.render(component1);