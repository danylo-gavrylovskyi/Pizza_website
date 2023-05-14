import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchPizza } from '../slices/pizzaCardSlice';
import { addToCart } from '../slices/cartSlice';
import { RootState, useAppDispatch } from '../store';

import styles from '../scss/pizzaCard.module.scss';

export const PizzaCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  let { item, status } = useSelector((state: RootState) => state.pizzaCard);
  const { types, sizes } = useSelector((state: RootState) => state.filter);

  React.useEffect(() => {
    dispatch(fetchPizza(Number(id)));
  }, []);

  const [activeTypeIndex, setTypeIndex] = React.useState(0);
  const [activeSizeIndex, setSizeIndex] = React.useState(26);
  const setActiveTypeIndex = (index: number) => {
    if (status === 'success' && item.types.includes(index)) {
      setTypeIndex(index);
    }
  };

  const setActiveSizeIndex = (index: number) => {
    if (status === 'success' && item.sizes.includes(index)) {
      setSizeIndex(index);
    }
  };

  item = {
    ...item,
    activeTypeIndex,
    activeSizeIndex,
    props: `${item.id + activeTypeIndex + activeSizeIndex}`,
  };

  if (status === 'success') {
    return (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img alt={item.title} src={item.imageUrl}></img>
          <Link className={styles.routerLink} to="/">
            <button className={styles.backBtn}>Back</button>
          </Link>
        </div>

        <div className={styles.rightSide}>
          <h1>{item.title}</h1>
          <div className={styles.parameters}>
            <section className={styles.upperBtns}>
              {types.map((type: string, index: number) => (
                <span
                  key={type}
                  onClick={() => setActiveTypeIndex(index)}
                  className={`${item.types.includes(index) ? '' : styles.unavailable} ${
                    activeTypeIndex === index ? styles.active : ''
                  }`}>
                  {type}
                </span>
              ))}
            </section>
            <section className={styles.footerBtns}>
              {sizes.map((size: number) => (
                <span
                  key={size}
                  onClick={() => setActiveSizeIndex(size)}
                  className={`${item.sizes.includes(size) ? '' : styles.unavailable} ${
                    activeSizeIndex === size ? styles.active : ''
                  }`}>
                  {size} cm.
                </span>
              ))}
            </section>
          </div>

          <div className={styles.priceNAdd}>
            <div>
              <h2>{item.price} €</h2>
            </div>
            <div>
              <button className={styles.addToCart} onClick={() => dispatch(addToCart(item))}>
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
          </div>
          <span>
            <span className={styles.ingredients}>Ingredients: </span>
            <span className={styles.description}>{item.ingredients}</span>
          </span>
        </div>
      </div>
    );
  }
  return <>Error</>;
};
