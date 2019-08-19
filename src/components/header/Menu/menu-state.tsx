import React, { useState } from "react";
import View from "./menu-view";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

const State: React.FC = () => {
  const [showCart, setCartVisible] = useState(false);
  const productCount = useSelector<AppState, number>(
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
