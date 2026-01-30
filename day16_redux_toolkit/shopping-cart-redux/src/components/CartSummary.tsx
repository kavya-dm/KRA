import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { clearCart } from '../store/cartSlice';

const CartSummary: React.FC = () => {
  const total = useAppSelector(state => state.cart.total);
  const itemCount = useAppSelector(state => state.cart.items.length);
  const dispatch = useAppDispatch();

  return (
    <div className="cart-summary">
      <p>Total Items: {itemCount}</p>
      <p>Total Price: ${total}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartSummary;
