import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../slices/cartSlice';

import styles from '../scss/_pizzablock.module.scss';

export function PizzaBlock({ title, imageUrl, price, types, sizes, item }) {
  const dispatch = useDispatch();

  const [activeTypeIndex, setTypeIndex] = React.useState(0);
  const [activeSizeIndex, setSizeIndex] = React.useState(26);
  const setActiveTypeIndex = (index) => {
    if (types.includes(index)) {
      setTypeIndex(index);
    }
  };

  const setActiveSizeIndex = (index) => {
    if (sizes.includes(index)) {
      setSizeIndex(index);
    }
  };

  item = {
    ...item,
    activeTypeIndex,
    activeSizeIndex,
    props: `${item.id + activeTypeIndex + activeSizeIndex}`,
  };

  return (
    <section className={styles.container}>
      <Link className={styles.routerLink} to={`/pizza/${item.id}`}>
        <img alt={title} src={imageUrl}></img>
        <p className={styles.pizzaTitle}>{title}</p>
      </Link>

      <div className={styles.parameters}>
        <section className={styles.upperBtns}>
          <span
            onClick={() => setActiveTypeIndex(0)}
            className={`${types.includes(0) ? '' : styles.unavailable} ${
              activeTypeIndex === 0 ? styles.active : ''
            }`}>
            thin
          </span>
          <span
            onClick={() => setActiveTypeIndex(1)}
            className={`${types.includes(1) ? '' : styles.unavailable} ${
              activeTypeIndex === 1 ? styles.active : ''
            }`}>
            traditional
          </span>
        </section>
        <section className={styles.footerBtns}>
          <span
            onClick={() => setActiveSizeIndex(26)}
            className={`${sizes.includes(26) ? '' : styles.unavailable} ${
              activeSizeIndex === 26 ? styles.active : ''
            }`}>
            26 cm.
          </span>
          <span
            onClick={() => setActiveSizeIndex(30)}
            className={`${sizes.includes(30) ? '' : styles.unavailable} ${
              activeSizeIndex === 30 ? styles.active : ''
            }`}>
            30 cm.
          </span>
          <span
            onClick={() => setActiveSizeIndex(40)}
            className={`${sizes.includes(40) ? '' : styles.unavailable} ${
              activeSizeIndex === 40 ? styles.active : ''
            }`}>
            40 cm.
          </span>
        </section>
      </div>

      <div className={styles.footer}>
        <span>from {price} €</span>
        <button onClick={() => dispatch(addToCart(item))}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          Add
        </button>
      </div>
    </section>
  );
}
