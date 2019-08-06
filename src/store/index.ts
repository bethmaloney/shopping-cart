import { combineReducers, createStore } from 'redux'
import { cartReducer } from "./cart/reducers";


const rootReducer = combineReducers({
  cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    rootReducer
  );

  return store;
}
