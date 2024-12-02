import React from 'react';
import styles from './ButtonC.module.css';

function ButtonC() {
  console.log(styles);

  return <button className={styles.button}>Button C</button>;
}

export default ButtonC;
