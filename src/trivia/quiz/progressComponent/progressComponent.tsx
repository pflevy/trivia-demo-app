import * as React from "react";
import { Question } from "../../redux/reducers/quiz";
import classes from "./progressComponent.module.css";
import { Link } from "react-router-dom";
const shortid = require("shortid");

export interface ProgressComponentProps {
  questions: Array<Question>;
}

const ProgressComponent: React.SFC<ProgressComponentProps> = ({
  questions
}) => {
  return (
    <div className={classes.progressComponent}>
      <Link to={"/home"}>X</Link>
      {questions &&
        questions.map(quiz => {
          return (
            <div
              // 80% of the screen for the pills, divided by the number of questions
              style={{ width: `${80 / questions.length}%` }}
              key={shortid.generate()}
              className={
                quiz.userAnswer === undefined
                  ? classes.neutral
                  : quiz.correctAnswer === quiz.userAnswer
                  ? classes.right
                  : classes.wrong
              }
            />
          );
        })}
    </div>
  );
};

export default React.memo(ProgressComponent);
