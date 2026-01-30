import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Shopping Cart Redux Toolkit</h1>
      <div className="main-container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
