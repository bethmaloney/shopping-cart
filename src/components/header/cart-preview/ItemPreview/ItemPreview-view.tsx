import React from 'react';
import Product from '../types/Product';
import styles from "./ItemPreview.module.scss"

type Prop = {
  product: Product;
}

const createListElement = (term: string, definition?: string) => {
  if (definition !== undefined) {
    return (
      <>
        <dt className={styles.attributeTerm}>{term}:</dt>
        <dd className={styles.attributeDefinition}>{definition}</dd>
      </>
    );
  } else {
    return <></>
  }
}

const View: React.FC<Prop> = ({ product }) => {
  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={product.imageUrl} alt="Product Preview"/>
        </div>
        <div className={styles.descriptionContainer}>
          <p>
            <span className={styles.name}>{product.name}</span><br />
            {product.description}
          </p>
          <dl className={styles.attributeList}>
            {createListElement("Colour", product.colour)}
            {createListElement("Size", product.size)}
            {createListElement("Qty", product.quantity.toLocaleString())}
          </dl>
        </div>
        <div className={styles.priceContainer}>
          $ {product.price}
        </div>
      </div>
      <button className="btn btn-link btn-sm">Remove</button>
      <hr className={styles.seperator} />
    </div>
  )
}

export default View;
