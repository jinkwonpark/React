/** 이벤트 핸들링 **/
import './App01.css';
import Button01 from './Button01';
import Button02 from './Button02';
import Button03 from './Button03';

function App01() {
  // 이벤트 핸들링 예제코드 01
  function handleClick() {
    console.log('Event 1');
  }
  return (
    <>
      {/* 이벤트 핸들링 예제코드 01 */}
      <button onClick={handleClick}>Button 1</button>
      <button
        onClick={() => {
          console.log('Event 2');
        }}
      >
        Button 2
      </button>
      <br />
      {/* 이벤트 핸들링 예제코드 02 - 위 코드를 분리된 컴포넌트에 적용 */}
      <Button01 name={'Home'} />
      <Button01 name={'Store'} />
      <Button01 name={'Contact'} />
      <br />
      {/* 마우스 관련 이벤트 속성 */}
      <Button02 name={'Home'} />
      <Button02 name={'Store'} />
      <Button02 name={'Contact'} />
      <br />
      {/* 이벤트 객체 */}
      <Button03 name={'Home'} />
      <Button03 name={'Store'} />
      <Button03 name={'Contact'} />
      <br />
      {/* 키보드 관련 이벤트 속성 */}
      <input
        onFocus={() => console.log('Focus')} // focus: 입력창이 클릭 또는 탭에 의해 선택되어 사용자 입력을 받을 준비가 되는 것, 즉 입력창에 커서가 깜빡이게 되는 것
        onBlur={() => console.log('Blur')} // blur: focus와 반대로 탭 키가 눌리거나 다른 곳이 클릭되어 해당 요소의 포커스 상태가 해제되는 것
        onChange={(e) => console.log(e.target.value)} // 해당 요소의 값이 바뀔 때 발생
        // target속성: 이벤트가 발생한 요소, 위 코드의 경우 해당 인풋을 가리킴
        // value속성: 해당 입력 요소에 입력된 현재 값을 반환함
        onKeyDown={(e) => {
          console.log(e.key, 'DOWN');
          if (e.key === 'Enter' && e.shiftKey) {
            console.log('Shift + Enter DOWN');
          } // 특정 키들의 조합에 대한 반응은 이와 같이 구현
        }} // 키를 누를 때 발생
        onKeyUp={(e) => {
          console.log(e.key, 'UP');
        }} // 누른 키를 놓을 때 발생
        // key속성: 키보드 이벤트에 발생한 이벤트 객체의 경우, key 속성을 통해 눌린 키가 어느 키인지 확인할 수 있다.
      />
    </>
  );
}

export default App01;
