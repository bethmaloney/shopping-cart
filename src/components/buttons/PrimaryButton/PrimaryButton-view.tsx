import React from 'react';
import { IProps } from "./types";

const View: React.FC<IProps> = ({ children = "Click Me", upperCase = true }) => {
  let classes = "btn btn-primary"

  if(upperCase === true) {
    classes = classes + " text-uppercase"
  }

  return (
    <button className={classes}>{children}</button>
  );
};

export default View;
