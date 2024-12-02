/** JSX 속성과 스타일링 **/
import './App.css';
import reactLogo from './assets/react.png';
import ButtonA from './ButtonA';
import ButtonB from './ButtonB';
import ButtonC from './ButtonC';
import ButtonD from './ButtonD';

const reactLogoAlt = 'React Logo';
console.log(reactLogo);

function App03() {
  // JSX 속성
  const disableInput = true;

  // JSX 요소들에 CSS 스타일을 적용하는 방법
  // 1. 인라인 스타일링
  const divStyle = {
    backgroundColor: 'lightblue',
    margin: '12px',
    padding: '20px',
    borderRadius: '8px',
  };

  // 2. 스타일링 동적 적용
  const styleA = {
    color: 'darkred',
    fontWeight: 'bold',
  };
  const styleB = {
    color: 'navy',
    textDecoration: 'underline',
  };
  const isPrimary = true;

  return (
    <>
      {/* JSX 속성 */}
      <label
        htmlFor="username" // for
      >
        Username:
      </label>
      <input
        type="text"
        id="username"
        className="input-field" // class
        autoComplete="off" // autocomplete
        maxLength={20} // maxlength
        spellCheck={true} // spellcheck, 렌더링 대상이 아니기 때문에 boolean 값도 사용 가능
        readOnly={false} // readonly, 렌더링 대상이 아니기 때문에 boolean 값도 사용 가능
        tabIndex={0} // tabindex
        disabled={disableInput}
        placeholder={disableInput ? '(DISABLED)' : 'Enter your name.'}
      />
      <br />
      {/* 이미지의 src 속성 */}
      <img src={reactLogo} alt={reactLogoAlt} width={256} height={228} />
      {/* 'src' 속성의 경우, 이미지 파일로부터 임포트한 'reactLogo'를 값으로 넣는다.
        프로젝트를 빌드한 뒤 프리뷰 기능으로 살펴보자.
        'assets' 안의 요소들은 파일명이 가공을 거친다. 이때, 파일명이 어떤 이름으로 빌드될지 알 수 없다.
        때문에 단순 문자열로 'src' 값을 작성하는 것은 불가능하다. 따라서 이미지를 사용할 때는 임포트 과정을 거쳐야 한다. */}
      <br />
      {/* JSX 요소들에 CSS 스타일을 적용하는 방법 */}
      {/* 1. 인라인 스타일링 */}
      <span
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        Bold & Italic
      </span>
      <br />
      <div style={divStyle}>DIV 1</div>
      <div
        style={{
          ...divStyle, // 객체 스프레딩: 기존 객체의 속성들을 활용해 새로운 객체를 만드는 데 사용
          backgroundColor: 'lightgreen',
          color: 'darkblue',
          fontWeight: 'bold',
        }}
      >
        DIV2
      </div>
      {
        /* 객체 스프레딩 예시 */
        // const person = {
        //   name: 'Alice',
        //   age: 25,
        // };
        // const updatedPerson = {
        //   ...person,
        //   age: 26,  // Overwrites the existing age value
        //   city: 'New York',  // Adds a new property
        // console.log(updatedPerson);
        // // Output: { name: 'Alice', age: 26, city: 'New York'}
      }
      <br />
      {/* 2. 스타일링 동적 적용 */}
      <div style={isPrimary ? styleA : styleB}>
        This text has dynamic styling.
      </div>
      <span
        style={{
          fontSize: isPrimary ? '1.5em' : '1em',
          opacity: isPrimary ? 1 : 0.5,
        }}
      >
        So does this text.
      </span>
      <br />
      {/* CSS 모듈 */}
      {/* 1. CSS 모듈 사용 안 한 예시 */}
      <>
        <ButtonA />
        <ButtonB />
      </>
      {/* ButtonA와 ButtonB는 서로 다른 CSS 파일을 임포트했으나 웹페이지에서 확인해보면 둘이 같다.
        두 버튼 컴포넌트는 모두 'button'이라는 클래스명을 사용하고 있고, 두 CSS 문서에는 같은 이름의 클래스에 대한 서로 다른 스타일이 작성되어 있다.
        이 스타일들은 전역으로 적용되기 때문에, 'button'이란 클래스를 가진 요소들은 모두 이 스타일들을 적용받게 된다. */}
      <br />
      {/* 2. CSS 모듈 사용한 예시 */}
      <>
        <ButtonC />
        <ButtonD />
      </>
      {/* CSS 문서들의 파일명과 확장자 사이에 'module'이란 텍스트 추가하고, 이와 같은 이름의 파일을 임포트하면 CSS 모듈 기능이 활성화된다.
        각각의 컴포넌트에서는 'styles'와 같이 코드에서 사용할 수 있는 자바스크립트 객체로서 임포트하게 된다.
        여기서는 클래스명에 직접 문자열을 입력하지 않고, 'styles' 객체로부터 'button'이라는 속성을 꺼내 사용한다.
        ButtonC와 ButtonD의 CSS 모듈 모두 'button'이라는 클래스명에 스타일을 지정한 것은 같으나, 각 버튼이 각자의 CSS 모듈에 작성된 스타일만을 적용받는다.
        콘솔을 확인해보면 CSS 문서에 작성된 모든 클래스 및 아이디가 객체의 속성들로 들어가 있다.
        각 속성들에는 해당 클래스 및 아이디의 변형된 이름들이 저장되어 있다. 클래스명과 아이디를 고유한 이름들로 변형함으로써 다른 모듈에 속한 것들과 겹치지 않도록 한다. */}
    </>
  );
}

export default App03;
