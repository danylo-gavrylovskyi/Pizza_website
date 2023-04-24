import styles from '../scss/_categories.module.scss';

export function Categories() {
  return (
    <div className={styles.categories}>
      <button className={styles.active}>All</button>
      <button>Meat</button>
      <button>Vegeterian</button>
      <button>Grill</button>
      <button>Spicy</button>
      <button>Calzone</button>
    </div>
  );
}
