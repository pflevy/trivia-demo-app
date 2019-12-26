import * as React from "react";
import FalseButton from "../../common/buttons/falseButton/falseButton";
import TrueButton from "../../common/buttons/trueButton/trueButton";
import { Question } from "../../redux/reducers/quiz";
import classes from "./quizComponent.module.css";
import Feedback from "./feedback/feedback";
import ProgressComponent from "../progressComponent/progressComponent";

export interface QuizComponentProps {
  quiz: Question;
  handleTrue: Function;
  handleFalse: Function;
  handleContinue: Function;
  gotItRight: boolean | null;
  questions: Array<Question>;
}

const QuizComponent: React.SFC<QuizComponentProps> = ({
  quiz,
  handleTrue,
  handleFalse,
  handleContinue,
  gotItRight,
  questions
}) => {
  return (
    <div tabIndex={0} className={classes.quizComponent}>
      <div />

      <div>
        <h2>{quiz.category}</h2>
        <div className={classes.displayQuestion}>
          <span>{quiz.question}</span>
        </div>
      </div>

      <br />
      <div
        className={classes.options}
        style={{
          visibility: gotItRight !== null ? "hidden" : "visible"
        }}
      >
        <FalseButton onClick={() => handleFalse()} />
        <TrueButton onClick={() => handleTrue()} />
      </div>

      <Feedback gotItRight={gotItRight} handleContinue={handleContinue} />
    </div>
  );
};

export default QuizComponent;
