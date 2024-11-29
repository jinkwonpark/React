/** 조건부 렌더링과 리스트 렌더링 **/
import './App.css';

// 삼항 연산자를 응용한 조건부 렌더링1
const isLoggedIn = true;

function Basic() {
  return (
    <>
      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello,Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}
    </>
  );
}

// 삼항 연산자를 응용한 조건부 렌더링2
function getUserContent(userStatus) {
  return userStatus === 'admin' ? (
    <>
      <h2>Admin Dashboard</h2>
      <button>Manage Users</button>
    </>
  ) : userStatus === 'member' ? (
    <p>Welcome to the community!</p>
  ) : (
    <a href="/signup">Sign up here</a>
  );
}

// AND 연산자를 응용한 조건부 렌더링
const hasMessages = true;
const message = 'Hello!';

function App02() {
  // 리스트 렌더링 예시
  const fruits = ['Apple', 'Banana', 'Cherry'];

  // 조건부 렌더링, 리스트 렌더링 예시
  const books = [
    { id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
    { id: 2, title: 'Advanced Hooks', published: false, publisher: 'OReilly' },
    { id: 3, title: 'JSX in Depth', published: true, publisher: 'Packt' },
  ];

  const publisheds = books.filter((book) => book.published);

  return (
    <>
      {/* 조건부 렌더링 */}
      <Basic /> {/* 삼항 연산자를 응용한 조건부 렌더링2 */}
      <br />
      {getUserContent('guest')} {/* 삼항 연산자를 응용한 조건부 렌더링2 */}
      <br />
      {hasMessages && <h2>You have new messages!</h2>}
      {/* AND 연산자를 응용한 조건부 렌더링 */}
      {/* 길이가 0이 아닌 문자열은 true로 인정되는 값, 즉 truthy. 반대는 falsy
       자바스크립트에서 AND 앞뒤로 truthy가 오면 뒤의 값을 반환하게 된다. */}
      {message && <p>Message: {message}</p>}
      {/* 빈 문자열이거나 null일 경우 렌더링되지 않는다. */}
      <p>Message: {message ?? <em>No message</em>}</p> {/* null 병합 연산자 */}
      <p>Message: {message || <em>Empty</em>}</p> {/* OR 연산자 */}
      {/* null 병합 연산자, OR 연산자의 앞에 null 또는 undefined가 들어올 경우, 두 연산자 모두 뒤에 오는 값을 반환한다.
       그 외의 falsy 값이 들어오면 OR 연산자만 뒤의 값을 반환한다. 즉, OR 연산자는 어떤 값이든 falsy에 해당하는 것이 들어오면 뒤의 값을 반환한다.
       두 연산자는 특정 값이 비어있거나 null일 때 기본값을 제공하는 용도로 자주 사용된다. */}
      <br />
      <br />
      {/* 리스트 렌더링 */}
      {[0, 123, 'A', 'Hello', true, false]}
      {/* 중괄호 표현식에는 배열도 넣을 수 있다. 이 경우, 배열 안의 요소들 중 렌더링 가능한 것만 렌더링하게 된다. */}
      <br />
      {[<button>A</button>, <button>B</button>, <button>C</button>]}
      {/* 배열에 JSX 요소도 넣을 수 있다. */}
      <br />
      {/* map 메소드 */}
      {
        /* [1, 2, 3, 4]
            .map(n => n * 2) */
        // [2, 4, 6, 8]
      }
      {/* 매개변수를 받아 처리한 값을 반환하는 함수를 매개변수로 받고, 배열의 각 요소를 해당 함수에 넣어 실행한 결과들로 새 배열을 만들어 반환한다. */}
      {
        /* [1, 2, 3, 4]
            .map(n => <p>{n}</p>) */
        // [
        //   <p>1</p>,
        //   <p>2</p>,
        //   <p>3</p>,
        //   <p>4</p>
        // ]
      }
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {/* 리스트 렌더링을 할 때는 반복될 요소에 key라는 속성을 설정해줘야 한다. 다른 요소와 겹치지 않는 고유한 값을 넣어줘야 한다. */}
            {/* map 메소드에 인자로 들어가는 함수에 두 번째 매개변수를 넣으면 0부터 시작하는 배열 인덱스가 된다.
              배열 인덱스는 배열 안의 항목들을 구분할 다른 방법이 없을 때만 사용한다. 항목의 추가 및 삭제시 이 값도 바뀌므로, 변경이 잦은 곳에서는 효율이 떨어지거나 오류가 발생할 수 있기 때문. */}
            {index}
            {fruit}
          </li>
        ))}
      </ul>
      {/* filter 메소드 */}
      {
        /* [1, 2, 3, 4]
            .filter(n => n % 2 == 0) */
        // [2, 4]
      }
      {/* truthy 또는 falsy를 반환하는 함수를 매개변수로 받고, 배열의 요소들 중 해당 함수에 넣었을 때 참을 반환하는 요소들만 담은 새 배열을 반환한다. */}
      {
        /* [1, 2, 3, 4]
            .filter(n => n % 2 == 0)
            .map(n => <p>{n}</p>) */
        // [
        //   <p>2</p>,
        //   <p>4</p>
        // ]
      }
      <br />
      {/* 조건부 렌더링, 리스트 렌더링 예시 */}
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {publisheds.length ? (
        publisheds.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found.</p>
      )}
      {/* 자바스크립트에서 0은 falsy에 해당 */}
    </>
  );
}

export default App02;
