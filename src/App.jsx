import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

import styles from './App.module.scss';

function App() {
  const { activeCategoryIndex, sortCriteriaIndex, sortCriteriaName } = useSelector(
    (state) => state.filter,
  );

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://644a85e179279846dceb1b8f.mockapi.io/pizzas?${
            activeCategoryIndex > 0 ? `category=${activeCategoryIndex}` : ''
          }&sortBy=${sortCriteriaName}&order=${sortCriteriaIndex % 2 === 0 ? 'desc' : 'asc'}`,
        );
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert('Error when getting pizzas on first page load');
      }
    })();
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
          element={
            <Home findedItems={findedItems} categories={categories} isLoading={isLoading} />
          }></Route>

        <Route path="/cart" exact element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
