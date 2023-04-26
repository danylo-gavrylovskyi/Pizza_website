import React from 'react';

import styles from '../scss/_categories.module.scss';

export function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

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
