import React from 'react';
import { Provider } from 'react-redux';
import { configure, addDecorator } from '@storybook/react';
import createStore from './../src/store';
import '../src/main.scss';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const withRedux = (story) => {
  const store = createStore();
  return (
    <Provider store={store}>
      {story()}
    </Provider>
  )
}

addDecorator(withRedux);

configure(loadStories, module);
