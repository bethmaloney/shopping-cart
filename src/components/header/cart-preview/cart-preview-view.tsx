import React from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import styles from "./cart-preview.module.scss";
import Product from './types/Product';
import ItemPreview from "./ItemPreview"

type IProps = {
  products: Product[];
}

const View: React.FC<IProps> = ({ products }) => {
  const emptyCart = (
    <div>
      <PrimaryButton>Continue Shopping</PrimaryButton>
    </div>
  );

  const cartWithItems = (
    <div>
      {
        products.map(product =>
          <ItemPreview product={product} key={product.id} />)
      }
      <PrimaryButton>Checkout Securely</PrimaryButton>
    </div>
  );

  return (
    <div className={styles.container}>
      {products.length > 0 ? cartWithItems : emptyCart}
    </div>
  )
}

export default View;
