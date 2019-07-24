import React from 'react';
import { IProps } from './types/types-view';
import PrimaryButton from '../../buttons/PrimaryButton';

const View: React.FC<IProps> = ({products}) => {
  const emptyCart = (
    <div>
      <PrimaryButton>Continue Shopping</PrimaryButton>
    </div>
  );

  const cartWithItems = (
    <div>
    {products.map(product => {
      return (
        <div>
          {product.name}
        </div>
      )
    })}
    <PrimaryButton>Checkout Securely</PrimaryButton>
  </div>
  );

  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      {products.length > 0 ? cartWithItems : emptyCart}
    </div>
  )
}

export default View;
