import styles from './Card.module.css';

const CardLayout = ({ title, children }) => {
  console.log(children);
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default CardLayout;
