/** 컴포넌트의 props 02 - 스프레딩 사용 예시 **/
import './App.css';
import InfoCard3 from './InfoCard03.jsx';

const cardData1 = {
  title: 'Props in React',
  content: 'Props pass data from one component to another.',
  author: 'Alice',
};
const cardData2 = {
  title: 'React Composition',
  content: 'Composition makes your components more reusable',
};

// 리스트 렌더링 예시
// 리스트 렌더링에는 고유값이 키로 사용돼야 하기 때문에 인덱스 번호를 추가했다.
const cards = [
  {
    idx: 1,
    title: 'Props in React',
    content: 'Props pass data from one component to another.',
    author: 'Alice',
  },
  {
    idx: 2,
    title: 'React Composition',
    content: 'Composition makes your components more reusable',
  },
];

function App05() {
  return (
    <>
      <InfoCard3 {...cardData1} />
      <InfoCard3 {...cardData2} />
      <br />
      {/* 리스트 렌더링 예시 */}
      {cards.map((cardData) => (
        <InfoCard3 key={cardData.idx} {...cardData} />
      ))}
    </>
  );
}

export default App05;
