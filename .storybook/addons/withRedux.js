import React from 'react';
import { Provider } from "react-redux";
import createStore from "../../src/store";

const withRedux = (story) => {
  const store = createStore();
  return (
    <Provider store={store}>
      {story()}
    </Provider>
  )
}

export default withRedux;
