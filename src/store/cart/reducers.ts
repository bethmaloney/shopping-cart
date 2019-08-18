import { CartState, CartActionTypes, ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

const initialState: CartState = {
  products: []
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload]
      }
    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(
          product => product.id !== action.payload
        )
      }
    default:
      return state;
  }
}
