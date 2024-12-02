import React from 'react';
import styles from './ButtonD.module.css';

function ButtonD() {
  console.log(styles);

  return <button className={styles.button}>Button D</button>;
}

export default ButtonD;
