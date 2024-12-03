import styles from './Card.module.css';

// 여기서 내보내는 함수 자체는 컴포넌트가 아니므로 파일명이 대문자로 시작하지 않는다.
// 다른 함수를 매개변수로 받거나, 다른 함수를 반환하는 함수를 고차 함수라 한다.
// 이 함수도 다른 함수를 반환한다.
// 다른 함수를 매개변수로 받는 것도 고차함수가 될 수 있는 조건 중 하나이다.
function withConditionalCard(WrappedComp) {
  // 반환하는 함수가 대문자이다. => 컴포넌트이다. 때문에 이와 같은 코드를 고차 컴포넌트라 한다.
  return function ConditionalCard({ disabled, ...props }) {
    // 고차 컴포넌트는 여러 종류의 컴포넌트에 공통 기능을 부여하는 용도로 사용될 수 있다.
    const cardStyle = {
      opacity: disabled ? 0.5 : 1,
    };

    return (
      <div className={styles.card} style={cardStyle}>
        <WrappedComp {...props} />
      </div>
    );
  };
}

export default withConditionalCard;
