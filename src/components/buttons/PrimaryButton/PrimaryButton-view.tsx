import React from 'react';
import { IProps } from "./types";

const View: React.FC<IProps> = ({ children = "Click Me", upperCase = true, className = '' }) => {
  let classes = `btn btn-primary ${className}`

  if(upperCase === true) {
    classes = classes + " text-uppercase"
  }

  return (
    <button className={classes}>{children}</button>
  );
};

export default View;
