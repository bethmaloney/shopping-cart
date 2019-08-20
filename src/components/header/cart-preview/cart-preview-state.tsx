import React from 'react';
import View from './cart-preview-view';
import { useAppSelector } from '../../../store';
import Product from './types/Product';

const State: React.FC = () => {
  const products = useAppSelector<Product[]>(state => state.cart.products);

  return (
    <View products={products} />
  )
}

export default State;
