import styles from './Card.module.css';

const InfoCard01 = (props) => (
  // 부모 컴포넌트에서 자식 컴포넌트를 작성할 때 함께 입력한 정보들이 props라 불리는 객체에 담겨 자식 컴포넌트로 전달된다.
  // 자식 컴포넌트는 해당 객체에 키로 접근해 데이터를 가져와 사용하고 화면에 렌더링된다.
  // 리액트에서는 이와 같이 props라 부리는 객체를 통해 컴포넌트 간에 데이터를 전달한다.
  <div className={styles.card}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <p>Author: {props.author}</p>
  </div>
);

export default InfoCard01;
