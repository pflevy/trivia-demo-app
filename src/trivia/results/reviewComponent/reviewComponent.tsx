import * as React from "react";
import { Question } from "../../redux/reducers/quiz";
import classes from "./reviewComponent.module.css";
const shortid = require("shortid");

export interface ReviewComponentProps {
  questions: Array<Question>;
}

const ReviewComponent: React.SFC<ReviewComponentProps> = ({ questions }) => {
  return (
    <div className={classes.reviewComponent}>
      {questions.map((question, index) => {
        const gotItRight = question.userAnswer === question.correctAnswer;
        return (
          <div
            key={shortid.generate()}
            className={gotItRight ? classes.rightAnswer : classes.wrongAnswer}
          >
            <h4>
              {index + 1}. {question.question}
            </h4>
            <div className={classes.answers}>
              <span>
                Correct Answer:{" "}
                <b>{question.correctAnswer ? "True" : "False"} </b>
              </span>
              <span>
                Your Answer: <b> {question.userAnswer ? "True" : "False"}</b>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewComponent;
