import { storiesOf, RenderFunction } from '@storybook/react';
import * as React from 'react';
import CartPreview from './index';
import Product from './types/Product';
import { Provider, useDispatch } from 'react-redux';
import createStore from './../../../store';
import { CartActionTypes } from '../../../store/cart/types';

const products: Product[] = [
  {
    id: 1,
    name: "Paul Ryan",
    description: "Messenger Bag",
    colour: "Black",
    imageUrl: "https://via.placeholder.com/200x300",
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


const withProvider = (story: RenderFunction) => {
  const store = createStore();
  return (
    <Provider store={store}>
      {story()}
    </Provider>
  )
}

storiesOf("CartPreview", module)
  .addDecorator(withProvider)
  .add("with no products", () => <CartPreview />)
  .add("with products", () =>
    React.createElement(() => {
      const dispatch = useDispatch()
      products.forEach(product => dispatch<CartActionTypes>({ type: "ADD_PRODUCT", payload: product }));

      return <CartPreview />
    })
  )
