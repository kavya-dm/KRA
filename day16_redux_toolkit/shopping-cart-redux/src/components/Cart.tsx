import React from 'react';
import { useAppSelector } from '../store/hooks';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart: React.FC = () => {
  const items = useAppSelector(state => state.cart.items);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(item => <CartItem key={item.id} item={item} />)
      )}
      <CartSummary />
    </div>
  );
};

export default Cart;
