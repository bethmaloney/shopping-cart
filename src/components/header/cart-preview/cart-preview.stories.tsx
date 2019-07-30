import { storiesOf } from '@storybook/react';
import * as React from 'react';
import CartPreview from './index';
import Product from './types/Product';

const products : Product[] = [
  {
    id: 1,
    name: "Paul Ryan",
    description: "Messenger Bag",
    colour: "Black",
    imageUrl: "https://via.placeholder.com/150",
    quantity: 1,
    price: 100
  },
  {
    id: 2,
    name: "Peter Henderson",
    description: "Classic Straight Jeans",
    size: "32w",
    imageUrl: "https://via.placeholder.com/150",
    quantity: 1,
    price: 299.99
  }
]

storiesOf("CartPreview", module)
  .add("with no products", () => (
    <CartPreview products = {[]} />
  ))
  .add("with products", () =>
    <CartPreview products = {products} />
  )
