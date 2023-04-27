import React from 'react';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import { Pagination } from './components/Pagination';

import styles from './App.module.scss';

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  const lastItemOnPageInd = currentPage * itemsPerPage;
  const firstItemOnPageInd = lastItemOnPageInd - itemsPerPage;
  const lastPageNum = Math.ceil(20 / 8);
  // const currentPageItems = items.slice(firstItemOnPageInd, lastItemOnPageInd);

  const paginate = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const previousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const nextPage = () => {
    setCurrentPage((prev) => (prev < lastPageNum ? prev + 1 : prev));
  };

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
      <Pagination
        itemsCount={20}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}></Pagination>
    </div>
  );
}

export default App;
