import * as React from "react";
import classes from "./genericButton.module.css";

export interface GenericButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const GenericButton: React.SFC<GenericButtonProps> = props => {
  return (
    <button className={classes.genericButton} {...props}>
      {props.children.toUpperCase()}
    </button>
  );
};

export default GenericButton;
