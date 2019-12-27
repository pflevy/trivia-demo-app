import * as React from "react";
import { Redirect, Link } from "react-router-dom";
import classes from "./resultsComponent.module.css";
import GenericButton from "../../common/buttons/genericButton/genericButton";
import BeginButton from "../../common/buttons/beginButton/beginButton";
import ReviewComponent from "../reviewComponent/reviewComponent";
import { Question } from "../../redux/reducers/quiz";

export interface ResultsComponentProps {
  showResults: boolean;
  rightAnswers: number;
  quizAmountOfQuestions: number;
  toggleShowReviewAnswers: Function;
  handlePlayAgain: Function;
  handleGameFinished: Function;
}

const ResultsComponent: React.SFC<ResultsComponentProps> = ({
  showResults,
  rightAnswers,
  quizAmountOfQuestions,
  toggleShowReviewAnswers,
  handlePlayAgain,
  handleGameFinished
}) => {
  if (!showResults) return <Redirect to="/home" />;

  return (
    <div className={classes.resultsComponent}>
      <h2>You scored</h2>
      <div className={classes.resultsDisplay}>
        <span>{rightAnswers}</span>
        <span> / {quizAmountOfQuestions} </span>
      </div>

      <GenericButton onClick={() => toggleShowReviewAnswers()}>
        Review answers
      </GenericButton>

      <BeginButton onClick={() => handlePlayAgain()}> Play Again</BeginButton>
      <br />
      <Link onClick={() => handleGameFinished()} to="home">
        Main Menu
      </Link>
    </div>
  );
};

export default ResultsComponent;
