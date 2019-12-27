import * as React from "react";
import classes from "./loadingSpinner.module.css";

export interface LoadingSpinnerProps {}

const LoadingSpinner: React.SFC<LoadingSpinnerProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
