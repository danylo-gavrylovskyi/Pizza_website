import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategoryIndex } from '../slices/filterSlice';
import { RootState } from '../store';

import styles from '../scss/_categories.module.scss';

export const Categories: React.FC<Record<string, string[]>> = ({ categories = [] }) => {
  const activeCategoryIndex = useSelector((state: RootState) => state.filter.activeCategoryIndex);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      {categories.map((value: string, index: number) => (
        <button
          key={value}
          onClick={() => dispatch(setActiveCategoryIndex(index))}
          className={activeCategoryIndex === index ? styles.active : ''}>
          {value}
        </button>
      ))}
    </div>
  );
};
