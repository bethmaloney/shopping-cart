import React from "react";
import { Product } from "./types/Product";
import styles from "./ProductDisplayPage.module.scss";
import { formatToCurrency } from "../../utility";
import PrimaryButton from "../buttons/PrimaryButton";


export type Props = {
  product: Product;
  colours: string[];
  sizes: string[];
  price: number;
}

const imageLink = (text: string) => `https://via.placeholder.com/900x1200.png?text=${text}`;

const View: React.FC<Props> = ({ product, colours, sizes, price }) => {
  return (
    <div className={styles.displayPageContainer}>
      <div className="row">
        <div className={styles.productImage}>
          <img src={imageLink(product.name)} alt={product.description} />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.price}>{formatToCurrency(price)}</p>

          <form>
            <div className="form-group">
              <select className="form-control">
                {colours.map(colour => <option>{colour}</option>)}
              </select>
            </div>

            <div className="form-group">
              <select className="form-control">
                {sizes.map(size => <option>{size}</option>)}
              </select>
            </div>

            <div className="form-group">
              <PrimaryButton className={styles.addToBagButton}>Add to bag</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default View;
