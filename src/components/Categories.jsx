import React from 'react';

import styles from '../scss/_categories.module.scss';

export function Categories({ activeIndex, setActiveIndex, categories = [] }) {
  return (
    <div className={styles.categories}>
      {categories.map((value, index) => (
        <button
          key={value}
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index ? styles.active : ''}>
          {value}
        </button>
      ))}
    </div>
  );
}
