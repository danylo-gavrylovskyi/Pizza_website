import React from 'react';
import axios from 'axios';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import { Pagination } from './components/Pagination';

import styles from './App.module.scss';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const { data } = await axios.get('https://644a85e179279846dceb1b8f.mockapi.io/pizzas');
        setItems(data);
      } catch (error) {
        console.log(error);
        alert('Error when getting pizzas on first page load');
      }
    })();
    setIsLoading(true);
  }, []);

  const [inputValue, setInputValue] = React.useState('');
  const findedItems = items.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  const lastItemOnPageInd = currentPage * itemsPerPage;
  const firstItemOnPageInd = lastItemOnPageInd - itemsPerPage;
  const lastPageNum = Math.ceil(findedItems.length / itemsPerPage);
  const currentPageItems = findedItems.slice(firstItemOnPageInd, lastItemOnPageInd);

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
      <Header inputValue={inputValue} setInputValue={setInputValue}></Header>
      <Categories
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        categories={categories}></Categories>
      <Sort></Sort>
      <p className={styles.currentCategory}>{categories[activeIndex]} pizzas</p>
      <main className={styles.mainGrid}>
        {currentPageItems.map((item) => (
          <PizzaBlock key={item.title} {...item}></PizzaBlock>
        ))}
      </main>
      <Pagination
        itemsCount={findedItems.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}></Pagination>
    </div>
  );
}

export default App;
