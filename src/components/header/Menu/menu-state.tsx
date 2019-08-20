import React, { useState } from "react";
import View from "./menu-view";
import { useAppSelector } from "../../../store";

const State: React.FC = () => {
  const [showCart, setCartVisible] = useState(false);

  const productCount = useAppSelector<number>(
    state => state.cart.products.reduce((acc, ele) => acc + ele.quantity, 0));

  return (
    <View
      showCart={showCart}
      cartPreviewClicked={() => setCartVisible(!showCart)}
      productCount = {productCount}
    />
  )
};

export default State;
