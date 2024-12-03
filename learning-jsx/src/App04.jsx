/** 컴포넌트의 props 01 **/
import './App.css';
import InfoCard01 from './InfoCard01';
import InfoCard02 from './InfoCard02';
import InfoCard03 from './InfoCard03';

function App04() {
  return (
    <>
      <InfoCard01
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard01
        title="React Composition"
        content="Composition makes your components more reusable"
        author="Charlie"
      />
      <br />
      <InfoCard02
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard02
        title="React Composition"
        content="Composition makes your components more reusable"
        author="Charlie"
      />
      <br />
      <InfoCard03
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard03
        title="React Composition"
        content="Composition makes your components more reusable"
      />
    </>
  );
}

export default App04;
