import styles from '../scss/pizzaCard.module.scss';

export function PizzaCard() {
  return (
    <div className={styles.container}>
      <div>
        <button>Back</button>
        <img></img>
      </div>

      <div>
        <h1>Pizza Name</h1>
        <p>Size, cm</p>
        <h1>price</h1>
        <button>Add</button>
        <p>Sklad</p>
      </div>
    </div>
  );
}
