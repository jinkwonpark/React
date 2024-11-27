/** JSX 문법 기초 **/
import './App.css';

const element1 = <h2>Hello, world!</h2>;
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
);

console.log(element1);
console.log(element2);

// JSX 요소 중괄호 표현식에 사용 예시
function ElementExpressions() {
  return (
    <section>
      {element1}
      {element2}
    </section>
  );
}

// 중괄호 표현식
const language = 'JavaScript';

// 중괄호 표현식 예시
function BasicExpressions() {
  const name = 'John';
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>{' '}
      {/* 문자열로 명시적 변환, 원시 자료형 중 중괄호 표현식에서 렌더링 될 수 있는 것은 문자열과 숫자뿐. */}
    </div>
  );
}

// 객체와 배열의 사용 예시
function ObjectArrayExpressions() {
  const user = {
    name: 'Jane',
    email: 'jane@example.com',
  };
  const colors = ['red', 'blue', 'green'];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>
        User: {user.name} ({user.email})
      </p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>

      <p>Doubleds: {numbers.map((n) => n * 2).join(', ')}</p>

      <p>Evens: {numbers.filter((n) => n % 2 === 0).join(', ')}</p>
    </div>
  );
}

// 함수 호출문 사용 예시
function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  return (
    <div>
      <p>{getGreeting('Alice')}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>
        Good{' '}
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? 'morning!' : 'afternoon!';
        })()}
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      {/* JSX 주석 */}
      <h1>JSX</h1>
      <br /> {/* 모든 태그는 이와 같이 꼭 닫아주어야 한다. */}
      {language} {/* 중괄호 표현식 */}
      <br />
      <BasicExpressions /> {/* 중괄호 표현식 예시 */}
      <br />
      <ObjectArrayExpressions /> {/* 객체와 배열의 사용 */}
      <br />
      <FunctionExpressions /> {/* 함수 호출문 사용 예시 */}
      {/* 문자열이나 숫자를 반환하는 형태의 자바스크립트 표현식들은 다 사용할 수 있다. */}
      <br />
      <ElementExpressions /> {/* JSX 요소 중괄호 표현식에 사용 예시 */}
    </>
  );
}

export default App;
