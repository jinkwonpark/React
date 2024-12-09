/** State 기초 02 **/
import './App02.css';
import { useState } from 'react';

function App03() {
  const [isPinned, setPinned] = useState(false);
  // state는 변수나 상수와 같이 그것이 가리키는 상태가 무엇인지 나타내는 이름을 사용하고,
  // 다음에 오는 함수는 그것에 값을 지정하는 세터의 형식으로 보통 이름을 짓는다.
  // state에는 숫자 뿐 아니라 불리언, 문자열, 객체, 배열 등 어떤 값이든 사용할 수 있다.

  const togglePinned = () => {
    setPinned(!isPinned);
  };

  return (
    <>
      <button onClick={togglePinned}>{isPinned && '📌'} Pin This!</button>
      {/* isPinned가 true일 경우에만 핀 이모지가 앞에 붙는다. */}
    </>
  );
}

export default App03;
