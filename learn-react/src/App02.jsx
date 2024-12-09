/** State 기초 01 **/
import './App02.css';
import { useState } from 'react';

function App02() {
  // 배열의 디스트럭처링 예시
  /*
  const letters = ['A', 'B', 'C'];
  위와 같은 배열이 있을 때, 첫 두 요소를 외부의 두 상수나 변수에 저장해야 한다고 가정
  디스트럭처링을 모르는 경우 - 외부에 상수 둘을 선언하고, 배열에 인덱스로 접근해서 각각 첫 번째와 두 번째 값을 할당
  const a = letters[0]; // A
  const b = letters[1]; // B
  배열의 디스트럭처링 사용할 경우 - a, b 상수가 만들어지고, 각각에 배열의 첫 번째와 두 번째 값이 할당
  const [a, b] = letters;
  */

  const [count, setCount] = useState(0);
  // 첫 번째 요소는 이 컴포넌트에서 사용될 state가 count라는 이름으로 반환된다. 이 값은 useState 함수에 인자로 넣는 값으로 초기화된다.
  // 두 번째 요소는 바로 앞의 state 값을 변경하고, 그 결과를 화면에 반영하는데 사용되는 세터 함수이다.
  // 리렌더링: 웹 페이지가 새로고침되지 않은 채로 그 내용만 바뀐다.

  console.log(useState(0));

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default App02;
