import React, { useState } from "react";
import View from "./menu-view";

const State: React.FC = () => {

  const [showCart, setCartVisible] = useState(false);

  return (
    <View showCart={showCart} cartPreviewClicked={() => setCartVisible(!showCart)} />
  )
};

export default State;
