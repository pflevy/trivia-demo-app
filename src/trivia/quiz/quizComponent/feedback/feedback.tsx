import * as React from "react";
import classes from "./feedback.module.css";
import GenericButton from "../../../common/buttons/genericButton/genericButton";
import isMobile from "../../../../utils/isMobile";
import right from "../../../assets/right.png";
import wrong from "../../../assets/wrong.png";

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
            alt={gotItRight ? "Right" : "Wrong"}
          />
        </div>
        <GenericButton onClick={() => handleContinue()}>
          {isMobile ? "CONTINUE" : "[↵] CONTINUE"}
        </GenericButton>
      </div>
    </div>
  );
};

export default Feedback;
