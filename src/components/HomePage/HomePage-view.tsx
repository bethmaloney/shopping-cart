import React from "react";
import SpecialCarousel from "./SpecialCarousel";
import ProductShowcase from "./ProductShowcase";
import { Product } from "./ProductShowcase/ProductShowcase-view";

type props = { products: Product[]}

const View: React.FC<props> = ({products}) => {
  return (
    <div>
      <SpecialCarousel />
      <ProductShowcase products={products} />
    </div>
  )
}

export default View;
