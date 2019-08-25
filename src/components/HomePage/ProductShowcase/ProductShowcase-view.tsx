import React from "react";
import styles from "./ProductShowcase.module.scss";
import PrimaryButton from "../../buttons/PrimaryButton";

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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.description}</h5>
          <div className={styles.imageContainer}>
            <img src={product.imageUrl} />
          </div>
          <div>
            <span>{product.price}</span>
            <PrimaryButton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      {products.map(product =>
        <div className="col-sm-4">
          {createCard(product)}
        </div>
      )}
    </div>
  )
}

export default View;
