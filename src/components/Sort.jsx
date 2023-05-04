import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCriteriaIndex, setCriteriaName } from '../slices/filterSlice';

import styles from '../scss/_sort.module.scss';

export function Sort() {
  const criterias = [
    'popularity (DESC)',
    'popularity (ASC)',
    'price (DESC)',
    'price (ASC)',
    'alphabet (DESC)',
    'alphabet (ASC)',
  ];

  const backendCriterias = ['rating', 'rating', 'price', 'price', 'title', 'title'];

  const choosenCriteriaIndex = useSelector((state) => state.filter.sortCriteriaIndex);
  const dispatch = useDispatch();

  const [isSortOpen, setSort] = React.useState(false);

  return (
    <div className={styles.sortBlock}>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"></path>
      </svg>
      <div className={styles.bold}>Sort by:</div>
      <div className={styles.sortCriteria}>
        <span onClick={() => setSort(!isSortOpen)}>{criterias[choosenCriteriaIndex]}</span>

        {isSortOpen && (
          <div className={styles.criterias}>
            {criterias.map((value, index) => (
              <p
                key={index}
                onClick={() => {
                  dispatch(setCriteriaIndex(index));
                  dispatch(setCriteriaName(backendCriterias[index]));
                  setSort(!isSortOpen);
                }}
                className={choosenCriteriaIndex === index ? styles.choosenCriteria : ''}>
                {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
