import React from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';

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
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('https://644a85e179279846dceb1b8f.mockapi.io/pizzas');
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert('Error when getting pizzas on first page load');
      }
    })();
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
        {isLoading
          ? [...Array(8)].map(() => (
              <ContentLoader
                speed={2}
                width={270}
                height={423}
                viewBox="0 0 270 423"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <circle cx="255" cy="465" r="25" />
                <rect x="0" y="440" rx="0" ry="0" width="210" height="20" />
                <rect x="0" y="474" rx="0" ry="0" width="152" height="20" />
                <circle cx="122" cy="100" r="100" />
                <rect x="0" y="224" rx="10" ry="10" width="240" height="25" />
                <rect x="0" y="265" rx="10" ry="10" width="240" height="81" />
                <rect x="0" y="370" rx="10" ry="10" width="91" height="27" />
                <rect x="140" y="367" rx="30" ry="30" width="97" height="33" />
              </ContentLoader>
            ))
          : currentPageItems.map((item) => <PizzaBlock key={item.title} {...item}></PizzaBlock>)}
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
