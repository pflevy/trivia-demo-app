import * as React from "react";
import GenericButton, {
  GenericButtonProps
} from "../genericButton/genericButton";
import classes from "./beginButton.module.css";

const BeginButton: React.SFC<GenericButtonProps> = props => {
  return (
    <GenericButton className={classes.beginButton} {...props}>
      {props.children}
    </GenericButton>
  );
};

export default BeginButton;
