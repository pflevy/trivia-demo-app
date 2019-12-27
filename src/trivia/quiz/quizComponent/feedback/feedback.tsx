import * as React from "react";
import classes from "./feedback.module.css";
import GenericButton from "../../../common/buttons/genericButton/genericButton";
import isMobile from "../../../../utils/isMobile";
import wrong from "../../../assets/wrong.svg";
import right from "../../../assets/right.svg";

export interface FeedbackProps {
  gotItRight: boolean | null;
  handleContinue: Function;
}

const Feedback: React.SFC<FeedbackProps> = ({ gotItRight, handleContinue }) => {
  if (gotItRight === null) return <></>;
  return (
    <div className={classes.feedback}>
      <div className={classes.display}>
        <div className={classes.contentImg}>
          <img
            src={gotItRight ? right : wrong}
            alt={gotItRight ? "Correct" : "Wrong"}
          />
        </div>
        <span className={classes.feedbackText}>
          {gotItRight ? "Correct!" : "Wrong!"}
        </span>
        <GenericButton onClick={() => handleContinue()}>
          {isMobile ? "CONTINUE" : "[↵] CONTINUE"}
        </GenericButton>
      </div>
    </div>
  );
};

export default Feedback;
