import * as React from "react";
import { Redirect } from "react-router-dom";

export interface ResultsComponentProps {
  showResults: boolean;
  rightAnswers: number;
  quizAmountOfQuestions: number;
}

const ResultsComponent: React.SFC<ResultsComponentProps> = ({
  showResults,
  rightAnswers,
  quizAmountOfQuestions
}) => {
  console.log(rightAnswers);
  if (!showResults) return <Redirect to="/home" />;

  return (
    <div>
      {rightAnswers} / {quizAmountOfQuestions}
    </div>
  );
};

export default ResultsComponent;
