import React from 'react';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Categories></Categories>
      <Sort></Sort>
      {/* <p>Category</p>
      <main>
        <PizzaBlock></PizzaBlock>
      </main>
      <Pagination></Pagination> */}
    </div>
  );
}

export default App;
