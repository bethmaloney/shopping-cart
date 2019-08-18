import { ADD_PRODUCT, REMOVE_PRODUCT, CartActionTypes, Product } from "./types";

export function addProduct(product: Product): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

export function removeProduct(productId: number): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  }
}
