import React from 'react';
import View from './cart-preview-view';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import Product from './types/Product';

const State: React.FC = () => {
  const products = useSelector<AppState, Product[]>(state => state.cart.products);

  return (
    <View products={products} />
  )
}

export default State;
