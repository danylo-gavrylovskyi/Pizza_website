import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pizzasFetch } from './slices/businessLogicSlice';
import { useAppDispatch, RootState } from './store';

import { Item } from './@types/generalTypes';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { PizzaCard } from './pages/PizzaCard';

import styles from './App.module.scss';

const App: React.FC = () => {
  const { activeCategoryIndex, sortCriteriaIndex, sortCriteriaName, inputValue } = useSelector(
    (state: RootState) => state.filter,
  );
  const { items } = useSelector((state: RootState) => state.businessLogic);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(pizzasFetch({ activeCategoryIndex, sortCriteriaIndex, sortCriteriaName }));
  }, [activeCategoryIndex, sortCriteriaIndex, sortCriteriaName]);

  const findedItems = items.filter((item: Item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  const orderTotal = cartItems.reduce(
    (sum: number, item: Item) => sum + item.price * item.count,
    0,
  );
  const quantity = cartItems.reduce((sum: number, item: Item) => sum + item.count, 0);

  return (
    <div className={styles.App}>
      <Header orderTotal={orderTotal} quantity={quantity}></Header>
      <Routes>
        <Route
          path="/"
          element={<Home findedItems={findedItems} categories={categories} />}></Route>

        <Route path="/cart" element={<Cart orderTotal={orderTotal} quantity={quantity} />}></Route>

        <Route path="/pizza/:id" element={<PizzaCard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
