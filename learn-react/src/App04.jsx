/** State 기초 03 - state에 이전 값을 기준으로 새 값 지정 **/
import './App02.css';
import { useState } from 'react';

function App04() {
  const [count, setCount] = useState(0); // count는 이전 값에 1을 더하거나 뺀 값이 새 값으로 들어간다.
  const [isPinned, setPinned] = useState(false); // isPinned는 이전 값을 반전시킨 값이 새 값으로 들어간다.

  const togglePinned = () => {
    setPinned((p) => !p);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={togglePinned}>{isPinned && '📌'} Pin This!</button>
    </>
  );
}

export default App04;
