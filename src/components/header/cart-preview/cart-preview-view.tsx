import React from 'react';
import { IProps } from './types/types-view';
import PrimaryButton from '../../buttons/PrimaryButton';
import styles from "./cart-preview.module.scss";

const View: React.FC<IProps> = ({ products }) => {
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
            <div className={styles.container}>
              <img src={product.imageUrl} alt="Product Preview" width="100"/>
            </div>
            <div className={styles.descriptionContainer}>
            {product.name}
            </div>
            <div className={styles.priceContainer}>
            </div>
            Price
          </div>
        )
      })}
      <PrimaryButton>Checkout Securely</PrimaryButton>
    </div>
  );

  return (
    <div className="cart-preview-container">
      {products.length > 0 ? cartWithItems : emptyCart}
    </div>
  )
}

export default View;
