import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>${item.price}</p>
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
      />
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;
