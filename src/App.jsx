import React from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Home } from './pages/Home';

import styles from './App.module.scss';
import { useSelector } from 'react-redux';

function App() {
  const activeCategoryIndex = useSelector((state) => state.category.value);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        console.log(activeCategoryIndex);
        const { data } = await axios.get(
          `https://644a85e179279846dceb1b8f.mockapi.io/pizzas${
            activeCategoryIndex > 0 ? `?category=${activeCategoryIndex}` : ''
          }`,
        );
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert('Error when getting pizzas on first page load');
      }
    })();
  }, [activeCategoryIndex]);

  const [inputValue, setInputValue] = React.useState('');
  const findedItems = items.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  return (
    <div className={styles.App}>
      <Header inputValue={inputValue} setInputValue={setInputValue}></Header>
      <Categories categories={categories}></Categories>
      <Sort></Sort>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home findedItems={findedItems} categories={categories} isLoading={isLoading} />
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
