import React from 'react';
import Product from '../types/Product';
import styles from "./ItemPreview.module.scss"

type Prop = {
  product: Product;
}

const View: React.FC<Prop> = ({ product }) => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={product.imageUrl} alt="Product Preview" width="100" />
      </div>
      <div className={styles.descriptionContainer}>
        {product.name}
      </div>
      <div className={styles.priceContainer}>
      </div>
      Price
  </div>
  )
}

export default View;
