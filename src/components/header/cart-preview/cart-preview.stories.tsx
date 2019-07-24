import { storiesOf } from '@storybook/react';
import * as React from 'react';
import CartPreview from './index';
import Product from './types/Product';

const products : Product[] = [
  {
    id: 1,
    name: "Bag",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Umbrella",
    imageUrl: "https://via.placeholder.com/150"
  }
]

storiesOf("CartPreview", module)
  .add("with no products", () => (
    <CartPreview products = {[]} />
  ))
  .add("with products", () =>
    <CartPreview products = {products} />
  )
