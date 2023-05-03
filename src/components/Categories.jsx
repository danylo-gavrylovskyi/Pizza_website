import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategoryIndex } from '../slices/categorySlice';

import styles from '../scss/_categories.module.scss';

export function Categories({ categories = [] }) {
  const activeCategoryIndex = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      {categories.map((value, index) => (
        <button
          key={value}
          onClick={() => dispatch(setActiveCategoryIndex(index))}
          className={activeCategoryIndex === index ? styles.active : ''}>
          {value}
        </button>
      ))}
    </div>
  );
}
