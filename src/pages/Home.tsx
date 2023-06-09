import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';

import { PizzaBlock } from '../components/PizzaBlock';
import { Pagination } from '../components/Pagination';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';

import { RootState } from '../store';

import { Item } from '../@types/generalTypes';

import styles from '../scss/_home.module.scss';

type HomeProps = {
  findedItems: Item[];
  categories: string[];
};

export const Home: React.FC<HomeProps> = ({ findedItems, categories }) => {
  const activeCategoryIndex = useSelector((state: RootState) => state.filter.activeCategoryIndex);
  const status = useSelector((state: RootState) => state.businessLogic.status);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  const lastItemOnPageInd = currentPage * itemsPerPage;
  const firstItemOnPageInd = lastItemOnPageInd - itemsPerPage;
  const lastPageNum = Math.ceil(findedItems.length / itemsPerPage);
  const currentPageItems = findedItems.slice(firstItemOnPageInd, lastItemOnPageInd);

  const paginate = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };
  const previousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const nextPage = () => {
    setCurrentPage((prev) => (prev < lastPageNum ? prev + 1 : prev));
  };

  return (
    <>
      <Categories categories={categories}></Categories>
      <Sort></Sort>
      <p className={styles.currentCategory}>{categories[activeCategoryIndex]} pizzas</p>
      <main className={styles.mainGrid}>
        {status === 'loading'
          ? [...Array(8)].map((element, index) => (
              <ContentLoader
                key={index}
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
          : currentPageItems.map((item) => (
              <PizzaBlock key={item.title} {...item} item={item}></PizzaBlock>
            ))}
      </main>
      <Pagination
        itemsCount={findedItems.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}></Pagination>
    </>
  );
};
