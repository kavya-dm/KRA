// TypeScript interfaces for cart and products

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // placeholder image URL
}

export interface CartItem extends Product {
  quantity: number;
}

