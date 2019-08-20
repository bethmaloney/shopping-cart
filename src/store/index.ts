import { combineReducers, createStore } from 'redux'
import { cartReducer } from "./cart/reducers";
import { TypedUseSelectorHook, useSelector } from 'react-redux';


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

/**
 * useSelector that's typed to the AppState
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
