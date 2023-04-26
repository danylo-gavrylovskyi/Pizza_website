import React from 'react';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

import styles from './App.module.scss';

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  return (
    <div className={styles.App}>
      <Header></Header>
      <Categories
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        categories={categories}></Categories>
      <Sort></Sort>
      <p className={styles.currentCategory}>{categories[activeIndex]} pizzas</p>
      <main className={styles.mainGrid}>
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
        <PizzaBlock></PizzaBlock>
      </main>
      {/* <Pagination></Pagination> */}
    </div>
  );
}

export default App;
