const handleEvent = (name, e) => {
  console.log(name, e, e.clientX, e.clientY, e.shiftKey);
  /*
  e: 이벤트에 대한 상세 정보를 담는 객체
  e.clientX, e.clientY: 이벤트가 발생한 X, Y 좌표값 확인
  e.shiftKey: 이벤트가 발생할 때 Shift 키가 함께 눌려 있었는지 확인, 눌려 있었으면 true, 안 눌렸으면 false
  */
};

const Button03 = ({ name }) => (
  <button onClick={(e) => handleEvent(name, e)}>{name}</button>
  // e: 이벤트에 대한 상세 정보를 담는 객체, 해당 이벤트가 발생한 요소, 발생 시간, 발생 위치, 함께 눌린 키 등 다양한 정보들이 담긴다.
  /*
  Synthetic Event: Dom의 이벤트 객체들과 유사한 속성들을 갖지만 리액트에 의해 추가적인 최적화가 적용된 객체.
    주요 목적은 사용자가 어떤 브라우저를 사용하든 모든 이벤트를 일관적으로 다루기 위함.
    이벤트 처리가 효율적으로 이뤄지게 하여 성능을 높이는 등의 이점들 제공.
    사용법은 일반 DOM의 이벤트 객체와 거의 같다.
  */
);

export default Button03;
