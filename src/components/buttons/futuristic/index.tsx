import React from 'react';
import styles from './index.module.scss'

const CryButton = () => {
  return (
    <button className={styles.kaveBtn}>
      <span className={styles.kaveLine}></span>
      Wow Hover!
    </button>
  );
};

export default CryButton;

