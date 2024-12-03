/** 컴포넌트의 props 04 - children 예시 **/
import './App.css';
import CardLayout from './CardLayout';

// 리액트에서는 자식 컴포넌트를 작성할 때 그 내부 요소들로 삽입한 요소들이 'children'이라는 속성으로 전달된다.
// 태그 종류와 개수에 상관없이 다양하게 작성되는 JSX 요소들을 자식 컴포넌트로 전달할 수 있다.
// 'children'을 사용하면, 외부에 레이아웃 컴포넌트를 구성한 뒤 그 안의 내용을 자유롭게 채울 수 있게 된다.
// 웹 페이지 전체의 레이아웃을 구성할 때 유용하게 활용될 수 있다.
const App07 = () => (
  <div>
    <CardLayout title="About">
      <p>Props of Components</p>
    </CardLayout>

    <CardLayout title="Details">
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </CardLayout>

    <CardLayout title="Contact">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </CardLayout>
  </div>
);

export default App07;
