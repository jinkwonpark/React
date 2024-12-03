import styles from './Card.module.css';

const InfoCard03 = ({ title = '(No Title)', content, author = 'Anonymous' }) => (
  // 구조 분해 할당을 사용하면 위와 같이 기본값 설정을 할 수 있다.
  // 디스트럭처링된 객체 매개변수에는 기본값들을 설정할 수 있다. 만약 주어진 props에 해당 항목이 없다면, 이 기본값들을 대신 사용한다.
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Author: {author}</p>
  </div>
);

export default InfoCard03;
