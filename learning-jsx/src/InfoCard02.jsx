import styles from './Card.module.css';

const InfoCard02 = ({ title, content, author }) => (
  // props 객체를 디스트럭처링해서 props 반복 작성을 줄일 수 있다.
  // props의 항목들 중 컴포넌트에서 사용할 것들만 위와 같이 디스트럭처링을 통해 명시하면 아래처럼 간결하게 중괄호 표현식들을 쓸 수 있다.
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Author: {author}</p>
  </div>
);

export default InfoCard02;
