import { configure, addDecorator } from "@storybook/react";
import "../src/main.scss";
import withRedux from "./addons/withRedux";

const req = require.context("../src/components", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withRedux);

configure(loadStories, module);
