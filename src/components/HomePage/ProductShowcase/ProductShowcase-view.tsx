import React from "react";

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
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
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
