import React from 'react';
import Calculator from '../components/Calculator';
import styles from './Calc.module.css';

function Calc() {
  return (
    <div className={styles.CalcContainer}>
      <h2>Let&lsquo;s do some math!</h2>
      <Calculator />
    </div>
  );
}

export default Calc;
