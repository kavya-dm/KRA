import React from 'react';
import { Product } from '../types';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width={100} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
