// 4. 예제 작성(JSX) 후 babel compiler 변환

const Header = () => {
  return /*#__PURE__*/React.createElement("h2", null, "\uC548\uB155\uD558\uC138\uC694. \uC774 \uD504\uB85C\uC81D\uD2B8\uAC00 \uB9C8\uC74C\uC5D0 \uB4DC\uC2DC\uBA74 \uC88B\uC544\uC694 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.");
};

// LikeButton 컴포넌트 : 클래스
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}
const LikeControlModule = () => {
  const [counter, setCounter] = React.useState(0);
  // 여러 개를 자식을 병렬적으로 위치시키려면 div가 필요함
  // 바로 createElement를 하는 것이 아님
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CurrentStatus, null), /*#__PURE__*/React.createElement(CurrentLike, {
    counter: counter
  }), /*#__PURE__*/React.createElement(ControlButton, {
    title: '증가',
    onClick: () => {
      setCounter(counter + 1);
    }
  }), /*#__PURE__*/React.createElement(ControlButton, {
    title: '감소',
    onClick: () => {
      setCounter(counter - 1);
    }
  }));
};
const CurrentStatus = () => {
  return /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : ");
};

// props 방법 1
const CurrentLike = props => {
  return /*#__PURE__*/React.createElement("span", null, props.counter);
};

// props 방법 2
const ControlButton = ({
  title,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, title);
};
const Div = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement(LikeControlModule, null));
};
const domContainer1 = document.querySelector('#react-root1');
const component1 = /*#__PURE__*/React.createElement(Div, null);
ReactDOM.render(component1, domContainer1);

// 새로 나온 리액트 18에서는 ReactDOM.render가 아니라, createRoot를 사용해야 함
// const root = ReactDOM.createRoot(document.querySelector('#react-root1'));
// root.render(component1);