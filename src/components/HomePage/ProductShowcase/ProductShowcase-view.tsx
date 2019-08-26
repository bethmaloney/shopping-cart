import React from "react";
import styles from "./ProductShowcase.module.scss";
import PrimaryButton from "../../buttons/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faPlus } from "@fortawesome/free-solid-svg-icons";

export type Product = {
  id: number;
  description: string;
  imageUrl: string;
  price: number;
}

type Props = { products: Product[] }

const View: React.FC<Props> = ({ products }) => {
  const createCard = (product: Product) => {
    return (
      <div className={styles.productCard}>
        <h5 className={styles.productTitle}>{product.description}</h5>
        <img className="card-img" src={product.imageUrl} />
        <div className={styles.cardBottom}>
          <span className={styles.price}>${product.price}</span>
          <PrimaryButton className={styles.addToCartButton}>
            <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faShoppingBag} />
          </PrimaryButton>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.productShowCaseContainer}>
      {products.map(product =>
        <div className="col-sm-3">
          {createCard(product)}
        </div>
      )}
    </div>
  )
}

export default View;
