import React from "react";
import View from "./ProductDisplayPage-view";
import { Props as ViewProps } from "./ProductDisplayPage-view";


type Props = {
  id: string;
}

const State: React.FC<Props> = ({ id }) => {
  const createProduct = (id: string): ViewProps => {
    return {
      product: {
        name: "Exciting Product",
        description: "It's very very exciting",
        imageUrl: `https://via.placeholder.com/500x1200.png?text=Exciting Product`
      },
      productInstances: []
    }
  }

  const childProps = createProduct(id);

  return <View product={childProps.product} productInstances={childProps.productInstances} />
}

export default State;
