import React from "react";
import View from "./ProductDisplayPage-view";

type Props = {
  id: string;
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const createProduct = (id: string) => {
  return {
    product: {
      id: id,
      name: "Exciting Product",
      description: "It's very very exciting",
      imageUrl: `https://via.placeholder.com/900x1200.png?text=Exciting Product`
    },
    productInstances: [
      {
        id: uuidv4(),
        price: 20.00,
        colour: "Red",
        size: "Large"
      },
      {
        id: uuidv4(),
        price: 20.00,
        colour: "Red",
        size: "Small"
      },
      {
        id: uuidv4(),
        price: 20.00,
        colour: "Red",
        size: "Medium"
      }
    ]
  }
}

const State: React.FC<Props> = ({ id }) => {
  const product = createProduct(id);

  const sizes = product.productInstances
    .reduce<string[]>((acc, x) => acc.includes(x.size) ? acc : [...acc, x.size], []);

  const colours = product.productInstances
  .reduce<string[]>((acc, x) => acc.includes(x.colour) ? acc : [...acc, x.colour], []);

  const price = product.productInstances[0].price;

  return <View product={product.product} sizes={sizes} colours={colours} price={price} />
}

export default State;
