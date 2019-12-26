import * as React from "react";
import GenericButton from "../genericButton/genericButton";
import classes from "./falseButton.module.css";
import isMobile from "../../../../utils/isMobile";

const FalseButton: React.SFC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return (
    <GenericButton className={classes.falseButton} {...props}>
      {isMobile ? "FALSE" : "[←] FALSE"}
    </GenericButton>
  );
};

export default FalseButton;
