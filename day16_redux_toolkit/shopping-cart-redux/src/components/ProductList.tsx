import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Sample 6 products
const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1000, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Phone', price: 700, image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Headphones', price: 200, image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Watch', price: 300, image: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Camera', price: 500, image: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Speaker', price: 150, image: 'https://via.placeholder.com/100' },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
