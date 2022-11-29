// 모듈 시스템과 npm 덕분에 외부 패키지를 프로젝트에 쉽게 포함할 수 있게 됨
import React from 'react';
// {}이 포함되지 않게 주의
import ReactDOM from 'react-dom';
import Button from "./Button.js";

function Conatiner () {
	return React.createElement(
		'div',
		null,
		React.createElement('p', null, '버튼을 클릭해 주세요.'),
		React.createElement(Button, {label: '좋아요'}),
		React.createElement(Button, {label: '싫어요'}),
	);
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Conatiner), domContainer);

// 작성한 후
// npx webpack