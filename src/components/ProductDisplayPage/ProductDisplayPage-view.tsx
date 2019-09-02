import React, { useState } from "react";
import { ProductInstance } from "./types/ProductInstances";
import { Product } from "./types/Product";
import styles from "./ProductDisplayPage.module.scss";


export type Props = {
  product: Product;
  productInstances: ProductInstance[];
}

const imageLink = (text: string) => `https://via.placeholder.com/500x1200.png?text=${text}`;

const View: React.FC<Props> = ({product: products, productInstances}) => {
  const [currentProductInstance, updateProductInstance] = useState(productInstances[0])

  return (
    <div>
      <div className="row">
        <div className={styles.productImage}>
          <img src={imageLink(products.name)}/>
        </div>
        <div className="col sm-6">
          <p>{products.name}</p>
          <p>{products.description}</p>
          <p>{currentProductInstance.price}</p>

          <select className="form-control">
            {productInstances.map(instance => <option>{instance.colour}</option>)}
          </select>
          <select className="form-control">
            {productInstances.map(instance => <option>{instance.size}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default View;
