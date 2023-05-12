import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { pizzasFetch } from './slices/businessLogicSlice';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

import styles from './App.module.scss';

function App() {
  const { activeCategoryIndex, sortCriteriaIndex, sortCriteriaName } = useSelector(
    (state) => state.filter,
  );
  const { items } = useSelector((state) => state.businessLogic);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(pizzasFetch({ activeCategoryIndex, sortCriteriaIndex, sortCriteriaName }));
  }, [activeCategoryIndex, sortCriteriaIndex, sortCriteriaName]);

  const [inputValue, setInputValue] = React.useState('');
  const findedItems = items.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  return (
    <div className={styles.App}>
      <Header inputValue={inputValue} setInputValue={setInputValue}></Header>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home findedItems={findedItems} categories={categories} />}></Route>

        <Route path="/cart" exact element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
