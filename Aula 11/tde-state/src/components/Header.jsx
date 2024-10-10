import React from 'react';
import styles from './Header.module.css';
const Header = ({ onNext, onPrev }) => {
  return (
    <div>
      <button className={styles.navButton} onClick={onPrev}>Back</button>
      <button className={styles.navButton} onClick={onNext}>Next</button>
    </div>
  );
};

export default Header;
