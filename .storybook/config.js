import { configure } from '@storybook/react';
import '../src/main.scss';


const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
