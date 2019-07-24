import Product from "./Product";

// these are all the optional props
export interface IDefaultProps {
}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
  products: Product[]
}

export interface IState {
  // this might not be needed if the component doesn't have internal state
}

export interface IContext {
  // this might not be needed if the component doesn't consume the context
}
