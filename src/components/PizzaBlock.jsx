import styles from '../scss/_pizzablock.module.scss';

export function PizzaBlock({ title = 'Paperoni' }) {
  return (
    <section className={styles.container}>
      <img alt="cheeseburger-pizza" src="img/cheeseburger-pizza.png"></img>

      <p className={styles.pizzaTitle}>{title}</p>

      <div className={styles.parameters}>
        <section className={styles.upperBtns}>
          <span className={styles.active}>thin</span>
          <span>traditional</span>
        </section>
        <section className={styles.footerBtns}>
          <span className={styles.active}>26 cm.</span>
          <span>30 cm.</span>
          <span>40 cm.</span>
        </section>
      </div>

      <div className={styles.footer}>
        <span>from 20 €</span>
        <button>
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
