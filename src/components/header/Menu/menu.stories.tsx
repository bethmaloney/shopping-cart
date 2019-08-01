import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Menu from './index';

storiesOf("Menu", module)
  .add("Default", () => (
    <div style={{ padding: 10 }}>
      <Menu />
    </div>
  ))
