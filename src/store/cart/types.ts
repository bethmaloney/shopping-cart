export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  colour?: string;
  size?: string;
  quantity: number;
  price: number;
}

export interface CartState {
  products: Product[]
}

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

interface AddProductAction {
  type: typeof ADD_PRODUCT,
  payload: Product
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT,
  payload: number
}

export type CartActionTypes = AddProductAction | RemoveProductAction;
