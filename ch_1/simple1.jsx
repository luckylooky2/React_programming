// 1. 컴포넌트 생성 및 root DOM 렌더링

// LikeButton 컴포넌트 : 클래스
function LikeButton() {
	// React 전역 변수 : reat.development.js 파일에서 전역 변수로 생성됨
	const [liked, setLiked] = React.useState(false);
	const text = liked ? '좋아요 취소' : '좋아요';
	/*
	React.createElement(component, props, ...children)
	- 문법적 설탕 : https://dkje.github.io/2020/09/02/SyntaxSugar/
	- react element 및 component를 생성(인스턴스 생성 느낌)
	- 일반적으로는 사용하지 않고 babel(온라인 컴파일러)의 도움을 받아 JSX 문법을 사용
	
	1) react element 생성
	1st param : 문자열(HTML 태그)
	2nd param : props, 컴포넌트가 사용하는 데이터
	3rd param : children, 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트 or 문자열
	
	2) react component 생성
	1st param : react 컴포넌트
	2nd param : props, 컴포넌트가 사용하는 데이터
	3rd param : children, 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트 or 문자열
	*/
	return React.createElement(
		'button',
		{ onClick: () => setLiked(!liked)},
		text);
}

// LikeButton 컴포넌트(JSX) : 클래스
const LikeButtonJSX = () => {
	const [liked, setLiked] = React.useState(false);
	const text = liked ? '좋아요 취소' : '좋아요';
	return React.createElement(
		'div', null, React.createElement(
		'button',
		{ onClick: () => setLiked(!liked)},
		text));
}

// #react-root DOM 선택
// 이 안에 들어가는 모든 엘리먼트를 ReactDOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부름
const domContainer = document.querySelector('#react-root');
// 동일한 문법 : 인스턴스 생성
const component1 = React.createElement(LikeButton);
const component2 = <LikeButtonJSX />;
// 만든 컴포넌트를 #react-root DOM에 붙임
// render(element, container, callback)
ReactDOM.render(component2, domContainer);

/*
react component와 react element의 차이점?

- 엘리먼트는 컴포넌트의 “구성 요소”이므로 컴포넌트가 return 하는 것이 엘리먼트
	- React 엘리먼트를 반환하면 유효한 React 컴포넌트
	- 컴포넌트는 엘리먼트 인스턴스를 생성하기 위한 클래스
- 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있음
	- React 엘리먼트는 불변객체
	- 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없음
	- UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render()로 전달하는 것
- 실제로 대부분의 React 앱은 root.render()를 한 번만 호출
	- React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트
	- 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트
- 리액트는 컴포넌트 단위로 화면을 구성
*/

/*
ReactDOM 렌더링 과정

1. <LikeButton /> 엘리먼트로 ReactDOM.render()를 호출합니다.
2. React는 props를 가지고 LikeButton 컴포넌트를 호출합니다.
3. LikeButton 컴포넌트는 결과적으로 <button>{text}</button> 엘리먼트를 반환합니다.
4. React DOM은 <button>{text}/button> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트합니다.*/
