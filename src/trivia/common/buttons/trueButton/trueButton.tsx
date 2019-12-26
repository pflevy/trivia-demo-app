import * as React from "react";
import GenericButton from "../genericButton/genericButton";
import classes from "./trueButton.module.css";
import isMobile from "../../../../utils/isMobile";

const TrueButton: React.SFC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = props => {
  return (
    <GenericButton className={classes.trueButton} {...props}>
      {isMobile ? "TRUE" : "TRUE [→]"}
    </GenericButton>
  );
};

export default TrueButton;
