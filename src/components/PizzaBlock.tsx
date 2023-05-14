import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../slices/cartSlice';
import { Item } from '../@types/generalTypes';
import { RootState } from '../store';

import styles from '../scss/_pizzablock.module.scss';

type PizzaBlockState = {
  title: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
  item: Item;
};

export const PizzaBlock: React.FC<PizzaBlockState> = ({
  title,
  imageUrl,
  price,
  types,
  sizes,
  item,
}) => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state: RootState) => state.filter.types);
  const allSizes = useSelector((state: RootState) => state.filter.sizes);

  const [activeTypeIndex, setTypeIndex] = React.useState(0);
  const [activeSizeIndex, setSizeIndex] = React.useState(26);
  const setActiveTypeIndex = (index: number) => {
    if (types.includes(index)) {
      setTypeIndex(index);
    }
  };

  const setActiveSizeIndex = (index: number) => {
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
          {allTypes.map((type, index) => (
            <span
              key={type}
              onClick={() => setActiveTypeIndex(index)}
              className={`${types.includes(index) ? '' : styles.unavailable} ${
                activeTypeIndex === index ? styles.active : ''
              }`}>
              {type}
            </span>
          ))}
        </section>
        <section className={styles.footerBtns}>
          {allSizes.map((size) => (
            <span
              key={size}
              onClick={() => setActiveSizeIndex(size)}
              className={`${sizes.includes(size) ? '' : styles.unavailable} ${
                activeSizeIndex === size ? styles.active : ''
              }`}>
              {size} cm.
            </span>
          ))}
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
};
