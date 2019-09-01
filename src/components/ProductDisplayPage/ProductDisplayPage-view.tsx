import React from "react";
import { ProductInstance } from "./types/ProductInstances";
import { Product } from "./types/Product";
import styles from "./ProductDisplayPage.module.scss";


export type Props = {
  product: Product;
  productInstances: ProductInstance[];
}

const imageLink = (text: string) => `https://via.placeholder.com/500x1200.png?text=${text}`;

const View: React.FC<Props> = ({product: products}) => {
  return (
    <div>
      <div className="row">
        <div className={styles.productImage}>
          <img src={imageLink(products.name)}/>
        </div>
        <div className="col sm-6">
          <h1>Other stuff</h1>
        </div>
      </div>
    </div>
  )
}

export default View;
