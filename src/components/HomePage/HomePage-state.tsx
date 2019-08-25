import React from "react";
import HomepageView from "./HomePage-view";
import faker from "faker";

const products = (numberOfProducts = 20) => {
  return Array.from({length: numberOfProducts}, (v, k) => {
    return {
      id: k,
      imageUrl: faker.image.fashion(),
      description: faker.commerce.product(),
      price: faker.random.number({min: 100, max: 1500, precision: 2})
    }
  });
}

const State: React.FC = () => {
  return <HomepageView products={products()}/>
}

export default State;
