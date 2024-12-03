/** 컴포넌트의 props 05 - 고차 컴포넌트 예시 **/
import './App.css';
import withConditionalCard from './withConditionalCard';
import SimpleCard from './SimpleCard';

const ConditionalSimpleCard = withConditionalCard(SimpleCard);

const App08 = () => (
  <>
    <ConditionalSimpleCard
      title="Active Card"
      content="This card is active."
      disabled={false}
    />

    <ConditionalSimpleCard
      title="Disabled Card"
      content="This card is disabled."
      disabled={true}
    />
  </>
);

export default App08;
